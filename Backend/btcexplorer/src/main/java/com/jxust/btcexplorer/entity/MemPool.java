package com.jxust.btcexplorer.entity;

public class MemPool {

     private boolean loaded;
    private int  size;
    private int  bytes;
    private int  usage;
    private int  maxmempool;
    private float mempoolminfee;
    private float minrelaytxfee;
    private int  unbroadcastcount;

    public boolean isLoaded() {
        return loaded;
    }

    public void setLoaded(boolean loaded) {
        this.loaded = loaded;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getBytes() {
        return bytes;
    }

    public void setBytes(int bytes) {
        this.bytes = bytes;
    }

    public int getUsage() {
        return usage;
    }

    public void setUsage(int usage) {
        this.usage = usage;
    }

    public int getMaxmempool() {
        return maxmempool;
    }

    public void setMaxmempool(int maxmempool) {
        this.maxmempool = maxmempool;
    }

    public float getMempoolminfee() {
        return mempoolminfee;
    }

    public void setMempoolminfee(float mempoolminfee) {
        this.mempoolminfee = mempoolminfee;
    }

    public float getMinrelaytxfee() {
        return minrelaytxfee;
    }

    public void setMinrelaytxfee(float minrelaytxfee) {
        this.minrelaytxfee = minrelaytxfee;
    }

    public int getUnbroadcastcount() {
        return unbroadcastcount;
    }

    public void setUnbroadcastcount(int unbroadcastcount) {
        this.unbroadcastcount = unbroadcastcount;
    }


}
