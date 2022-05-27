import { useRouter } from "next/router";
import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { getChallengeIdAsNumberFromQuery } from "utils/challenge";
import { ChallengeTypeEnum, IChallengeTypeAndId } from "types/challenge";
import { ChallengesContextProvider } from "context/ChallengesContext";
import useChallenges from "hooks/useChallenges";
import { useEffect, useState } from "react";

function ChallengeTestComponent({ challengeId }) {
  const { pythonChallenges, challengeResults } = useChallenges();
  const challenge = pythonChallenges?.find((o) => o.id == challengeId);
  const challengeResult = challengeResults?.find(
    (o) =>
      o.challenge_type === ChallengeTypeEnum.PythonChallenge &&
      o.challenge_id == challengeId
  );

  return (
    <div>
      {challengeId ? JSON.stringify(pythonChallenges) : <p>Loading...</p>}
    </div>
  );
}

export default function ViewPythonChallengePage() {
  const router = useRouter();
  const { cid } = router.query;
  let challengeId = getChallengeIdAsNumberFromQuery(cid);
  const [challenges, setChallenges] = useState<IChallengeTypeAndId[]>(null);

  useEffect(() => {
    if (router.isReady) {
      setChallenges([
        {
          challengeType: ChallengeTypeEnum.PythonChallenge,
          challengeId,
        },
      ]);
    }
  }, [router.isReady]);

  return (
    <ChallengesContextProvider challenges={challenges}>
      <Layout>
        <main
          style={{
            paddingBottom: "10rem",
          }}
        >
          <Container fluid>
            <Row>
              <Col>
                <ChallengeTestComponent challengeId={challengeId} />
              </Col>
            </Row>
          </Container>
        </main>
      </Layout>
    </ChallengesContextProvider>
  );
}
