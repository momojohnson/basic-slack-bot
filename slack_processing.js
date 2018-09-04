const { WebClient } = require('@slack/client');
const token = "YOUR_ACCESS_TOKEN_FROM_SLACK_GOES_HERE";

web = new WebClient(token);

function getUserProfile(user_id){
	return web.users.info({user: user_id}).then((profile) =>{
		return profile;
	})
}

module.exports = {getUserProfile}
