import React from "react";
import { Link } from "react-router-dom";
import useBread from "../../../a-components/breadcrumbs/use-bread";
import Transition from '../../../a-components/transition';
import "./index.scss";

import { Table, Space, Button } from "antd";
import { ColumnProps } from "antd/es/table";

const Index = (props: any) => {
  //组件
  interface table {
    key: String;
    title: String;
    link: String;
  }

  const columns: ColumnProps<table>[] = [
    {
      title: "排序",
      dataIndex: "key",
      key: "key",
      width: "10%",
      render: (text: String) => <>{text}</>,
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      width: "30%",
      align: "center",
    },

    {
      title: "跳转商品路径",
      dataIndex: "link",
      key: "link",
      width: "40%",
      align: "center",
    },

    {
      title: "操作",
      key: "action",

      width: "40%",
      align: "center",
      render: () => (
        <Space size="middle">
          {/* <a href="/#" className="highlight1">
            上移
          </a> */}
          <Button type="link">
            上移
          </Button>
          {/* <a href="/#" className="highlight1">
            下移
          </a> */}
          <Button type="link">
            下移
          </Button>
          <Link to="/shop/addCarousel">
            <Button type="link">
              编辑
            </Button>
          </Link>
          <Button type="link">
            删除
          </Button>
          {/* <a href="/#" className="highlight1">
            删除
          </a> */}
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      title: "李老师李老师",
      link: "https://modao.cc/app/98e6ad39b4134ea456f98cc5d7efe87a31dbb888?",
    },
    {
      key: "2",
      title: "李老师李老师",
      link: "https://modao.cc/app/98e6ad39b4134ea456f98cc5d7efe87a31dbb888?",
    },
    {
      key: "3",
      title: "李老师李老师",
      link: "https://modao.cc/app/98e6ad39b4134ea456f98cc5d7efe87a31dbb888?",
    },
  ];

  return (
    <div className="padding_22_18">
      {useBread()}
      <div className="modules carousel-wrap">
        <Button type="primary" onClick={(e) => {}} className="addCarousel">
          <Link to="/shop/addCarousel">添加</Link>
        </Button>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Transition(Index);
