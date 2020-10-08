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
            <Row>
              {useMemo(
                () =>
                  blogContents.map((content) => (
                    <Col lg={3} sm={4} xs={6}>
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
