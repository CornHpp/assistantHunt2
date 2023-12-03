"use client";
import React, { useCallback, useEffect, useState } from "react";
import BoardItem from "@/components/custom/boardItem";
import styles from "./index.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Header: React.FC = (props) => {
  const router = useRouter();

  const toAllView = useCallback(() => {
    router.push("/leaderboard");
  }, []);
  return (
    <div className={styles.boardStyleCss}>
      <div className={styles.boardtitle}>
        <h2>Leaderboard</h2>
        <div
          className="cursor-pointer"
          onClick={toAllView}
        >
          View All <ArrowRightOutlined />
        </div>
      </div>

      <BoardItem></BoardItem>
      <BoardItem></BoardItem>
      <BoardItem></BoardItem>
      <BoardItem></BoardItem>
      <BoardItem></BoardItem>
    </div>
  );
};

export default React.memo(Header);
