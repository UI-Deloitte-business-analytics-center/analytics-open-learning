import { useRouter } from "next/router";
import RecordedPythonChallenge from "components/common/RecordedPythonChallenge";
import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { getChallengeIdAsNumberFromQuery } from "utils/challenge";
import { ChallengeTypeEnum } from "types/challenge";
import { ChallengesContextProvider } from "context/ChallengesContext";

export default function ViewPythonChallengePage() {
  const router = useRouter();
  const { cid } = router.query;
  let challengeId = getChallengeIdAsNumberFromQuery(cid);

  console.log(`PyChallenge id: ${challengeId}`);

  const challenges = [
    {
      challengeType: ChallengeTypeEnum.PythonChallenge,
      challengeId,
    },
  ];

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
                {cid ? (
                  <RecordedPythonChallenge challengeId={challengeId} />
                ) : (
                  <p>Loading...</p>
                )}
              </Col>
            </Row>
          </Container>
        </main>
      </Layout>
    </ChallengesContextProvider>
  );
}
