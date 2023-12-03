"use client";
import React, { useCallback, useEffect, useState } from "react";
import Header from "@/components/custom/header";
import styles from "./index.module.scss";
import { Input } from "antd";
import BoardList from "@/components/custom/boardList";
import BoardItem from "@/components/custom/boardItem";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Leaderboard: React.FC = (props) => {
  const router = useRouter();
  return (
    <div className="">
      <Header></Header>
      {/* <div className={styles.searchTitle}>
        <h1 className={styles.title}>Find AI assistants</h1>
        <h1 className={styles.title}> for any tasks</h1>

        <div className={styles.searchInput}>
          <Input
            className={styles.input}
            placeholder="Search..."
          />
        </div>
      </div> */}

      <div className={styles.homeBody}>
        <div className={styles.boardListBox}>
          <div className={styles.gripFlex}>
            <div
              onClick={() => {
                router.back();
              }}
              className="w-full text-2xl mb-4"
            >
              <ArrowLeftOutlined />
            </div>
            <div className="w-full text-2xl font-bold">Top GPTs</div>
            <BoardItem></BoardItem>
            <BoardItem></BoardItem>
            <BoardItem></BoardItem>
            <BoardItem></BoardItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
