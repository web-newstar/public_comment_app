import * as actionTypes from '../constants/userinfo'
export default function update(data){
    return {
        type:actionTypes.USERINFO_UPDATE,
        data
    }
}