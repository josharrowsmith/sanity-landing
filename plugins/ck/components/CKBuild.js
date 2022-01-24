import React from "react";
import axios from "axios";
import { ToastProvider, useToast } from "@sanity/ui";
import styles from "./CKBuild.css";

const CKBuild = () => {
  const toast = useToast();
  const triggerBuild = async () => {
    try {
      await axios({
        method: "post",
        url: "https://webhooks.amplify.ap-southeast-2.amazonaws.com/prod/webhooks?id=d45757b7-6a06-4f97-8713-040e4b0a8cfe&token=Bo44pcw0eoHyLvraqabmUT9u5hZI40aoyAZTgPevlgM",
        headers: { "Content-Type": "application/json" },
      });
      toast.push({
        status: "success",
        title: "Build triggered successfully!",
      });
    } catch (e) {
      toast.push({
        status: "error",
        title: "Could not trigger build!",
      });
    }
  };
  return (
    <ToastProvider>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Trigger Build</h2>
        </header>
        <div className={styles.content}>
          <div className={styles.buildWrapper}>
            <p>
              This button will trigger a static build for all CK websites to
              update the contents published through Sanity.
            </p>
            <p>
              <b>ONLY</b> use this button if you have published all changes you
              have made in Sanity.
            </p>
            <div className={styles.btnWrapper}>
              <button className={styles.btn} onClick={() => triggerBuild()}>
                Build
              </button>
            </div>
          </div>
        </div>
      </div>
    </ToastProvider>
  );
};

export { CKBuild };
