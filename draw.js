exactly as written
encoded
preserves the case in url

//http://anthem.com/williamle8300/staging
//http://anthem.com/williamle8300/Canadian20%Indie  //>different trackSets
//http://anthem.com/williamle8300/canadian20%indie  //>different trackSets
//http://anthem.com/williamle8300/trackset/Dream20%of20%the20%90s#trackOne  //>'play the first track'
//http://anthem.com/williamle8300/trackset/Canadian20%Indie/Best20%Of20%SubPop/Dream20%of20%the20%90s
//http://anthem.com/williamle8300#502	 //>"Canadian Indie"
//http://anthem.com/search/monsieur20%adi

$.ajax({
	type: "GET",
	url: "/getCachedTrackObj/54565448",
	async: false,
	success: function(cachedTrackObj) {
		//if (cachedTrackObj) { alert('true!') } else { alert('false!') };
		console.log(cachedTrackObj.encodedObjHTML);
	}
});

User: {
	...
	collection: {
		allTracks: [991222,1103948,948548,7785422,949331,410200,1103948,7785422,949331,223310,11322,7785422,949331,223310,11322,7785422,949331,223310,11322,7785422,949331,223310,11322,7785422,949331,223310,11322,7785422,949331,223310,11322,7785422,949331,223310,11322]
		trackSets: {
			list: [
				{permID:0,name:null,setList:[991222,1103948,948548,7785422,949331,410200]},
				{permID:174,name:'Da Grind',setList:[948548,12322,23,128,948548,7785422,949331,410200,1103948,991222,23,128,948548,7785422,949331,410200,1103948,991222]},
				{permID:502,name:'Canadian Indie',setList:[7785422,949331,948548,1103948,948548,7785422,949331,410200,1103948,991222]},
			],
			permIDCounter:503,
			lastPlayed:[•(trackSet permIDs)•],
			lastModified:[•(trackSet permIDs)•]
		}
	}
	...
}