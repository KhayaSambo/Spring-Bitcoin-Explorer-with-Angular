package com.jxust.btcexplorer.entity;

public class ChainTips {

       private int height;
       private String hash;
       private int branchlen;
       private String status;

       public int getHeight() {
              return height;
       }

       public void setHeight(int height) {
              this.height = height;
       }

       public String getHash() {
              return hash;
       }

       public void setHash(String hash) {
              this.hash = hash;
       }

       public int getBranchlen() {
              return branchlen;
       }

       public void setBranchlen(int branchlen) {
              this.branchlen = branchlen;
       }

       public String getStatus() {
              return status;
       }

       public void setStatus(String status) {
              this.status = status;
       }


}
