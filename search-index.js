var searchIndex = {};
searchIndex['startuppong'] = {"items":[[0,"","startuppong","An API wrapper for startuppong.com",null,null],[3,"Account","","An account is necessary to make requests against the API.",null,null],[3,"Player","","A person on the ladder",null,null],[12,"id","","",0,null],[12,"rating","","",0,null],[12,"rank","","",0,null],[12,"name","","",0,null],[3,"Match","","The stats before and after a set",null,null],[12,"loser_rating_after","","",1,null],[12,"winner_rating_after","","",1,null],[12,"played_time","","",1,null],[12,"loser_rank_after","","",1,null],[12,"winner_name","","",1,null],[12,"winner_rank_before","","",1,null],[12,"winner_rating_before","","",1,null],[12,"loser_name","","",1,null],[12,"winner_id","","",1,null],[12,"loser_rank_before","","",1,null],[12,"loser_rating_before","","",1,null],[12,"id","","",1,null],[12,"winner_rank_after","","",1,null],[12,"loser_id","","",1,null],[3,"GetPlayersResponse","","Wrapper for APIs returning a player list.",null,null],[3,"GetMatchesResponse","","Wrapper for APIs returning a match list.",null,null],[5,"get_players_ids","","Get ids for players",null,{"inputs":[{"name":"account"},{"name":"vec"}],"output":{"name":"result"}}],[5,"get_players","","Return all players associated with the given account",null,{"inputs":[{"name":"account"}],"output":{"name":"result"}}],[5,"get_recent_matches_for_company","","Return most recent matches on the given account",null,{"inputs":[{"name":"account"}],"output":{"name":"result"}}],[5,"add_match","","Add a match",null,{"inputs":[{"name":"account"},{"name":"u32"},{"name":"u32"}],"output":{"name":"result"}}],[5,"add_match_with_names","","Add a match using the given names.",null,{"inputs":[{"name":"account"},{"name":"str"},{"name":"str"}],"output":{"name":"result"}}],[0,"error","","Error types, From impls, etc",null,null],[4,"ApiError","startuppong::error","The error type returned in a startuppong `Result`.",null,null],[13,"PlayerNotFound","","An ID was not found for the given player name in a call to `get_player_ids`",2,null],[13,"Http","","Something went wrong during the request",2,null],[13,"Io","","Error reading response",2,null],[13,"JsonDecoding","","Response JSON could not be decoded",2,null],[11,"fmt","","",2,{"inputs":[{"name":"apierror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",2,{"inputs":[{"name":"apierror"}],"output":{"name":"str"}}],[11,"cause","","",2,{"inputs":[{"name":"apierror"}],"output":{"name":"option"}}],[11,"fmt","","",2,{"inputs":[{"name":"apierror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",2,{"inputs":[{"name":"apierror"},{"name":"error"}],"output":{"name":"apierror"}}],[11,"from","","",2,{"inputs":[{"name":"apierror"},{"name":"error"}],"output":{"name":"apierror"}}],[11,"from","","",2,{"inputs":[{"name":"apierror"},{"name":"decodererror"}],"output":{"name":"apierror"}}],[11,"clone","startuppong","",3,{"inputs":[{"name":"account"}],"output":{"name":"account"}}],[11,"encode","","",3,{"inputs":[{"name":"account"},{"name":"__s"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"account"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new Account",3,{"inputs":[{"name":"account"},{"name":"string"},{"name":"string"}],"output":{"name":"account"}}],[11,"from_env","","Try and create an account from environment variables",3,{"inputs":[{"name":"account"}],"output":{"name":"result"}}],[11,"id","","Return a ref to the api_account_id",3,{"inputs":[{"name":"account"}],"output":{"name":"str"}}],[11,"key","","Return a ref to the api_access_key",3,{"inputs":[{"name":"account"}],"output":{"name":"str"}}],[11,"clone","","",0,{"inputs":[{"name":"player"}],"output":{"name":"player"}}],[11,"decode","","",0,{"inputs":[{"name":"player"},{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"player"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"match"}],"output":{"name":"match"}}],[11,"decode","","",1,{"inputs":[{"name":"match"},{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"match"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"decode","","",4,{"inputs":[{"name":"getplayersresponse"},{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"getplayersresponse"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"players","","Consume the response and get underlying Vec",4,{"inputs":[{"name":"getplayersresponse"}],"output":{"name":"vec"}}],[11,"decode","","",5,{"inputs":[{"name":"getmatchesresponse"},{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"getmatchesresponse"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"matches","","Consume the response and get underlying Vec",5,{"inputs":[{"name":"getmatchesresponse"}],"output":{"name":"vec"}}]],"paths":[[3,"Player"],[3,"Match"],[4,"ApiError"],[3,"Account"],[3,"GetPlayersResponse"],[3,"GetMatchesResponse"]]};
initSearch(searchIndex);
