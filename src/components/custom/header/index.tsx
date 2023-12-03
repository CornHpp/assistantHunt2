"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./index.module.scss";
import logo from "@/assets/images/home/logo.jpg";
import Image from "next/image";
import { Button, Mask } from "antd-mobile";
import { Input } from "antd";
import { useSelector } from "react-redux";

const Header: React.FC = (props) => {
  const { isMobile } = useSelector((state: any) => state.user);

  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.header}>
      <Image
        src={logo}
        alt="logo"
        width={173}
        height={32}
      />
      <div className="flex item-center">
        {!isMobile && (
          <div className={styles.searchInput}>
            <Input
              className={styles.input}
              placeholder="Search..."
            />
          </div>
        )}

        <Button className={styles.singUpButton}>Sing Up</Button>

        <div
          onClick={() => {
            setVisible(true);
          }}
          className="text-white flex items-center ml-4 font-bold cursor-pointer"
        >
          Submit GPTs
        </div>
      </div>

      <Mask
        visible={visible}
        onMaskClick={() => setVisible(false)}
      >
        <div className={styles.MaskContent}>
          <div className="font-bold text-base">
            Insert your url conversation gpt here
          </div>
          <Input
            className={`${styles.input} mt-4 mb-4`}
            placeholder="url..."
          />
          <Button className={`w-24 ${styles.sendButton}`}>Send</Button>
        </div>
      </Mask>
    </div>
  );
};

export default Header;
