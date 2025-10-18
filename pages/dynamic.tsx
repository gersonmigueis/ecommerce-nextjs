import { GetServerSideProps, NextPage } from "next";
import React, { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse {
    name: string;
    timestamp: string;

}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`);
  const data = await response.json();

  return {
    props: {
      serverSideData: data,
    },
  };
};

const Dynamic: NextPage<{ serverSideData: ApiResponse }> = (props) => {
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
      <h1>Página Dinâmica</h1>
    
        <Row>
            <Col>
                <h3>
                    Gerado no lado servidor
                </h3>
                <h2>
                    {props.serverSideData.timestamp}
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

export default Dynamic;