import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "../../redux/actions/userInfo";

class UserInfo extends Component{
    render(){
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return(
            <div>
                {
                    isLoading ? '請求信息中....':
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用戶信息：</p>
                                    <p>用戶名：{userInfo.name}</p>
                                    <p>介紹：{userInfo.intro}</p>
                                </div>
                        )

                }
                <button onClick = {() => this.props.getUserInfo()}>請求用戶信息</button>
            </div>
        )
    }
}
export  default connect((state) => ({userInfo: state.userInfo}),{getUserInfo})(UserInfo);

