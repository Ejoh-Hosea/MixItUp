import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <h3>About us</h3>
      <p>
        Meet Barmate - Your Pocket Bartender with Personality! Discover a world
        of colorful cocktails and clever mocktails pulled straight from the
        coolest drink APIs around. Whether you are mixing for a chill night in
        or showing off to friends, Barmate serves up recipes, vibes, and
        inspiration with every shake. Ready to sip, stir, and sparkle?
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;
export default About;
