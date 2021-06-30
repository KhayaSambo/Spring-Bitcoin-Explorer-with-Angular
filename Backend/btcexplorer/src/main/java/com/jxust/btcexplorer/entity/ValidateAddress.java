package com.jxust.btcexplorer.entity;

public class ValidateAddress {

    private boolean isvalid;
    private String address;
    private String scriptPubKey;
    private boolean isScript;
    private boolean iswitness;
    private int witness_version;
    private String witness_program;

    public boolean isIsvalid() {
        return isvalid;
    }

    public void setIsvalid(boolean isvalid) {
        this.isvalid = isvalid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getScriptPubKey() {
        return scriptPubKey;
    }

    public void setScriptPubKey(String scriptPubKey) {
        this.scriptPubKey = scriptPubKey;
    }

    public boolean isScript() {
        return isScript;
    }

    public void setScript(boolean script) {
        isScript = script;
    }

    public boolean isIswitness() {
        return iswitness;
    }

    public void setIswitness(boolean iswitness) {
        this.iswitness = iswitness;
    }

    public int getWitness_version() {
        return witness_version;
    }

    public void setWitness_version(int witness_version) {
        this.witness_version = witness_version;
    }

    public String getWitness_program() {
        return witness_program;
    }

    public void setWitness_program(String witness_program) {
        this.witness_program = witness_program;
    }


}
