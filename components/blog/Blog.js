import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import BlogCard from "~/components/card/blog/BlogCard";
import ClearFix from "~/components/container/ClearFix";
import ContentWrap from "~/components/wrapper/ContentWrap";
import blogContents from "./blogContents";

const Blog = () => {
  return (
    <section>
      <ClearFix>
        <ContentWrap>
          <ClearFix>
            <Row style={{ transition: "all .4s ease" }}>
              {useMemo(
                () =>
                  blogContents.map((content) => (
                    <Col lg={3} md={4} sm={12} xs={12}>
                      <BlogCard {...content} />
                    </Col>
                  )),
                [blogContents]
              )}
            </Row>
          </ClearFix>
        </ContentWrap>
      </ClearFix>
    </section>
  );
};

export default Blog;
