"use client";
import React, { useCallback, useEffect, useState } from "react";
import Header from "@/components/custom/header";
import styles from "./index.module.scss";
import { Input } from "antd";
import BoardList from "@/components/custom/boardList";
const Home: React.FC = (props) => {
  return (
    <div className="">
      <Header></Header>
      <div className={styles.searchTitle}>
        <h1 className={styles.title}>Find AI assistants</h1>
        <h1 className={styles.title}> for any tasks</h1>

        <div className={styles.searchInput}>
          <Input
            className={styles.input}
            placeholder="Search..."
          />
        </div>
      </div>

      <div className={styles.homeBody}>
        <div className={styles.boardListBox}>
          <div className={styles.gripFlex}>
            <BoardList></BoardList>
            <BoardList></BoardList>
            <BoardList></BoardList>
            <BoardList></BoardList>
            <BoardList></BoardList>
            <BoardList></BoardList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
