import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { PageContainer, TextDiv } from "./Style";

interface IProps {
  page: number;
}

const First = forwardRef<HTMLDivElement, IProps>(({ page }, ref) => {
  return (
    <PageContainer ref={ref}>
      <TextDiv className={page === 1 ? "action " : ""}>First</TextDiv>
    </PageContainer>
  );
});

const Second = forwardRef<HTMLDivElement, IProps>(({ page }, ref) => {
  return (
    <PageContainer ref={ref}>
      <TextDiv className={page === 2 ? "action " : ""}>Second</TextDiv>
    </PageContainer>
  );
});

const Third = forwardRef<HTMLDivElement, IProps>(({ page }, ref) => {
  return (
    <PageContainer ref={ref}>
      <TextDiv className={page === 3 ? "action " : ""}>Third</TextDiv>
    </PageContainer>
  );
});

const Fourth = forwardRef<HTMLDivElement, IProps>(({ page }, ref) => {
  return (
    <PageContainer ref={ref}>
      <TextDiv className={page === 4 ? "action " : ""}>Fourth</TextDiv>
    </PageContainer>
  );
});

const Wraper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const OnePageScroll = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  const [page, setPage] = useState(1);

  const scrollHandle = useCallback(() => {
    const returnY = (el: any) => el.current.getBoundingClientRect().y;
    if (returnY(first) >= -100 && returnY(first) <= 100) setPage(1);
    if (returnY(second) && returnY(second) <= 100) setPage(2);
    if (returnY(third) >= -100 && returnY(third) <= 100) setPage(3);
    if (returnY(fourth) >= -100 && returnY(fourth) <= 100) setPage(4);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle, true);
    return () => {
      window.removeEventListener("scroll", scrollHandle, true);
    };
  }, [scrollHandle]);

  return (
    <>
      <Wraper>
        <First page={page} ref={first} />
        <Second page={page} ref={second} />
        <Third page={page} ref={third} />
        <Fourth page={page} ref={fourth} />
      </Wraper>
    </>
  );
};

export default OnePageScroll;
