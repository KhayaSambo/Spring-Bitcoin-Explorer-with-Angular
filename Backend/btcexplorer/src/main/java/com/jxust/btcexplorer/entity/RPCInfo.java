package com.jxust.btcexplorer.entity;

import com.alibaba.fastjson.JSONArray;

public class RPCInfo {

    private JSONArray active_commands;
    private String logpath;


    public JSONArray getActive_commands() {
        return active_commands;
    }

    public void setActive_commands(JSONArray active_commands) {
        this.active_commands = active_commands;
    }

    public String getLogpath() {
        return logpath;
    }

    public void setLogpath(String logpath) {
        this.logpath = logpath;
    }




}
