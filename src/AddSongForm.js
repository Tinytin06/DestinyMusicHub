import React from "react";
import {Button, Layout, Input, Space, ConfigProvider,theme} from "antd";
import { Content } from "antd/es/layout/layout";



function AddSongForm(){
    //const [buttonName] = useState(0)
    function enterButton (buttonName){
        console.log(buttonName)
        console.log("function enterButton is working")
        return;
    }
    return(
       
        <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#7458e2',
        // Alias Token
        colorBgContainer: '#fbf3ff',
        algorithm: theme.compactAlgorithm,
      },
    }}>
        <Content>
            <Space.Compact style={{width:'100%'}}>
            <Input placeholder="Song Title" />
            </Space.Compact>
        </Content>
        <Content>
            <Space.Compact style={{width:'100%'}}>
            <Input placeholder="Lead Composer" />
            </Space.Compact>
        </Content>
        <Button ghost>Add New Source</Button>
        <Button ghost onClick={this.enterButton.bind(this,"song")}>Enter Song and Sources Into Database</Button>
        </ConfigProvider>
    )
}
export default AddSongForm