import styled from "@emotion/styled";

const Name = styled.h2`
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: bold;
  color: #222;
`;

const Date = styled.h2`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Resume = () => {
  return (
    <div>
      <Name> 실전코딩 수강 </Name>
      <Date> 2024.3 ~ 2024.6 </Date>
      <Description> github, springboot, react 등 관련된 강의 수강 </Description>
      <br />
      <Name> 어드벤처 디자인 수강 </Name>
      <Date> 2022.9 ~ 2022.12 </Date>
      <Description> 강의 질문에 대한 시스템을 구축할 수 있는 프로젝트 진행 </Description>
    </div>
  );
};

export default Resume;
