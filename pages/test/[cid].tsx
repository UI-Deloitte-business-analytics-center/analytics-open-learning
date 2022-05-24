import { useRouter } from "next/router";
import RecordedPythonChallenge from "components/common/RecordedPythonChallenge";
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

  console.log("**********************************");
  console.log(`ChallengeTestComponent, challengeId=${challengeId}`);
  console.log(`pythonChallenges`);
  console.log(pythonChallenges);

  console.log(`challengeResults`);
  console.log(challengeResults);

  console.log(`challenge`);
  console.log(challenge);

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

  console.log("=====================");
  console.log(`PyChallenge id: ${challengeId}`);

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

  console.log(`CHALLENGES`);
  console.log(challenges);

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
