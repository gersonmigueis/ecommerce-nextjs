import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import React, { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse {
    name: string;
    timestamp: string;
}
// Static Generation: In environment dev is not possible to see the static generation working.

export const getStaticProps: GetStaticProps = async () => {
    const staticData = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`);
    const data = await staticData.json();

    return {
        props: {
            staticData: data,
        },
        revalidate: 10, // In seconds - ISR Incremental Static Regeneration
    };
}

const Static: NextPage = (props: 
    {
        children?: ReactNode 
        staticData?: ApiResponse
    }) => {
  const [clienteSideData, setClientSideData] = useState<ApiResponse | null>(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setClientSideData(data);
 };

  return (
   <Container tag="main">
      <h1>Como funciona a renderização do Next.js</h1>
    
        <Row>
            <Col>
                <h3>
                    Geradoe estaticamente durante o build:
                </h3>
                <h2>
                    {props.staticData?.timestamp}
                </h2>
            </Col>
            <Col>
                <h3>
                    Gerado no lado cliente
                </h3>
                <h2>
                    {clienteSideData?.timestamp}
                </h2>
            </Col>
        </Row>
    </Container>
  );
}

export default Static;