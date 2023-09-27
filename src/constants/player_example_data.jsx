// https://api.sleeper.app/projections/nfl/2023/4?season_type=regular
//https://api.sleeper.app/stats/nfl/2023?season_type=regular&position=TEAM&order_by
//stats = live?
//projections = future?

export const examplePlayer = {
  status: "Active",
  metadata: null,
  pandascore_id: null,
  injury_start_date: null,
  weight: "225",
  search_rank: 3,
  player_id: "4046",
  position: "QB",
  oddsjam_id: "B671C99CB711",
  birth_city: null,
  injury_body_part: null,
  espn_id: 3139477,
  years_exp: 6,
  depth_chart_order: 1,
  news_updated: 1695657320330,
  sportradar_id: "11cad59d-90dd-449c-a839-dddaba4fe16c",
  swish_id: 839031,
  injury_status: null,
  practice_description: null,
  fantasy_data_id: 18890,
  college: "Texas Tech",
  rotowire_id: 11839,
  gsis_id: "00-0033873",
  stats_id: 839031,
  high_school: "Whitehouse (TX)",
  yahoo_id: 30123,
  birth_state: null,
  full_name: "Patrick Mahomes",
  height: "74",
  last_name: "Mahomes",
  birth_date: "1995-09-17",
  injury_notes: null,
  hashtag: "#patrickmahomes-NFL-KC-15",
  search_first_name: "patrick",
  search_last_name: "mahomes",
  age: 28,
  rotoworld_id: 12142,
  fantasy_positions: ["QB"],
  birth_country: null,
  practice_participation: null,
  first_name: "Patrick",
  active: true,
  depth_chart_position: "QB",
  number: 15,
  team: "KC",
  sport: "nfl",
  search_full_name: "patrickmahomes",
};

export const leagueDataExample = [
  {
    total_rosters: 8,
    status: "in_season",
    sport: "nfl",
    shard: 571,
    settings: {
      daily_waivers_last_ran: 5,
      reserve_allow_cov: 1,
      reserve_slots: 1,
      leg: 3,
      offseason_adds: 0,
      bench_lock: 0,
      trade_review_days: 3,
      league_average_match: 0,
      waiver_type: 1,
      max_keepers: 1,
      type: 0,
      pick_trading: 1,
      disable_trades: 0,
      daily_waivers: 0,
      taxi_years: 0,
      trade_deadline: 11,
      veto_show_votes: 0,
      reserve_allow_sus: 1,
      reserve_allow_out: 1,
      playoff_round_type: 0,
      waiver_day_of_week: 2,
      taxi_allow_vets: 0,
      reserve_allow_dnr: 0,
      veto_auto_poll: 0,
      commissioner_direct_invite: 0,
      reserve_allow_doubtful: 0,
      waiver_clear_days: 1,
      playoff_week_start: 15,
      daily_waivers_days: 5461,
      last_scored_leg: 2,
      taxi_slots: 0,
      playoff_type: 0,
      daily_waivers_hour: 0,
      num_teams: 8,
      veto_votes_needed: 5,
      playoff_teams: 6,
      playoff_seed_type: 0,
      start_week: 1,
      reserve_allow_na: 0,
      draft_rounds: 3,
      taxi_deadline: 0,
      waiver_bid_min: 0,
      capacity_override: 0,
      disable_adds: 0,
      waiver_budget: 100,
      last_report: 2,
      best_ball: 0,
    },
    season_type: "regular",
    season: "2023",
    scoring_settings: {
      st_ff: 1.0,
      pts_allow_7_13: 4.0,
      def_st_ff: 1.0,
      rec_yd: 0.1,
      fum_rec_td: 6.0,
      pts_allow_35p: -4.0,
      pts_allow_28_34: -1.0,
      fum: 0.0,
      rush_yd: 0.1,
      pass_td: 4.0,
      blk_kick: 2.0,
      pass_yd: 0.04,
      safe: 2.0,
      def_td: 6.0,
      fgm_50p: 5.0,
      def_st_td: 6.0,
      fum_rec: 2.0,
      rush_2pt: 2.0,
      xpm: 1.0,
      pts_allow_21_27: 0.0,
      fgm_20_29: 3.0,
      pts_allow_1_6: 7.0,
      fum_lost: -2.0,
      def_st_fum_rec: 1.0,
      int: 2.0,
      fgm_0_19: 3.0,
      pts_allow_14_20: 1.0,
      rec: 0.5,
      ff: 1.0,
      fgmiss: -1.0,
      st_fum_rec: 1.0,
      rec_2pt: 2.0,
      rush_td: 6.0,
      xpmiss: -1.0,
      fgm_30_39: 3.0,
      rec_td: 6.0,
      st_td: 6.0,
      pass_2pt: 2.0,
      pts_allow_0: 10.0,
      pass_int: -1.0,
      fgm_40_49: 4.0,
      sack: 1.0,
    },
    roster_positions: [
      "QB",
      "RB",
      "RB",
      "WR",
      "WR",
      "TE",
      "FLEX",
      "FLEX",
      "FLEX",
      "K",
      "DEF",
      "BN",
      "BN",
      "BN",
      "BN",
    ],
    previous_league_id: null,
    name: "Casual American Football",
    metadata: { keeper_deadline: "0", auto_continue: "on" },
    loser_bracket_id: null,
    league_id: "1004828664186376192",
    last_transaction_id: 1010493657838886912,
    last_read_id: "1012076386292424704",
    last_pinned_message_id: null,
    last_message_time: 1695660323263,
    last_message_text_map: null,
    last_message_id: "1012076386292424704",
    last_message_attachment: null,
    last_author_is_bot: true,
    last_author_id: "166666666666666666",
    last_author_display_name: "sys",
    last_author_avatar: null,
    group_id: null,
    draft_id: "1004828665524359168",
    display_order: 0,
    company_id: null,
    bracket_id: null,
    avatar: null,
  },
  {
    total_rosters: 12,
    status: "in_season",
    sport: "nfl",
    shard: 562,
    settings: {
      daily_waivers_last_ran: 28,
      reserve_allow_cov: 1,
      reserve_slots: 1,
      leg: 3,
      offseason_adds: 0,
      bench_lock: 0,
      trade_review_days: 2,
      league_average_match: 0,
      waiver_type: 0,
      max_keepers: 1,
      type: 0,
      pick_trading: 1,
      disable_trades: 0,
      daily_waivers: 0,
      taxi_years: 0,
      trade_deadline: 12,
      veto_show_votes: 0,
      reserve_allow_sus: 1,
      reserve_allow_out: 1,
      playoff_round_type: 0,
      waiver_day_of_week: 2,
      taxi_allow_vets: 0,
      reserve_allow_dnr: 0,
      veto_auto_poll: 0,
      commissioner_direct_invite: 0,
      reserve_allow_doubtful: 0,
      waiver_clear_days: 1,
      playoff_week_start: 15,
      daily_waivers_days: 1093,
      last_scored_leg: 2,
      taxi_slots: 0,
      playoff_type: 0,
      daily_waivers_hour: 0,
      num_teams: 12,
      squads: 1,
      veto_votes_needed: 5,
      playoff_teams: 6,
      playoff_seed_type: 0,
      start_week: 1,
      reserve_allow_na: 0,
      draft_rounds: 3,
      taxi_deadline: 0,
      capacity_override: 0,
      disable_adds: 0,
      waiver_budget: 100,
      last_report: 2,
      best_ball: 0,
    },
    season_type: "regular",
    season: "2023",
    scoring_settings: {
      st_ff: 1.0,
      pts_allow_7_13: 4.0,
      def_st_ff: 1.0,
      rec_yd: 0.1,
      fum_rec_td: 6.0,
      pts_allow_35p: -4.0,
      pts_allow_28_34: -1.0,
      fum: -1.0,
      rush_yd: 0.1,
      pass_td: 4.0,
      blk_kick: 2.0,
      rec_td_50p: 2.0,
      pass_yd: 0.04,
      safe: 2.0,
      rec_td_40p: 0.0,
      def_td: 6.0,
      fgm_50p: 5.0,
      def_st_td: 6.0,
      fum_rec: 2.0,
      rush_2pt: 2.0,
      fgmiss_0_19: -1.0,
      xpm: 1.0,
      pts_allow_21_27: 0.0,
      fgm_20_29: 3.0,
      fgmiss_20_29: -1.0,
      pts_allow_1_6: 7.0,
      fum_lost: -2.0,
      def_st_fum_rec: 1.0,
      int: 2.0,
      fgm_0_19: 3.0,
      def_2pt: 2.0,
      pts_allow_14_20: 1.0,
      rec: 0.5,
      ff: 1.0,
      fgmiss: 0.0,
      st_fum_rec: 1.0,
      pass_int_td: -2.0,
      rec_2pt: 2.0,
      rush_td: 6.0,
      rush_td_50p: 2.0,
      xpmiss: -1.0,
      fgm_30_39: 3.0,
      rec_td: 6.0,
      st_td: 6.0,
      pass_2pt: 2.0,
      pts_allow_0: 10.0,
      pass_int: -1.0,
      fgm_40_49: 4.0,
      sack: 1.0,
    },
    roster_positions: [
      "QB",
      "RB",
      "RB",
      "WR",
      "WR",
      "TE",
      "FLEX",
      "FLEX",
      "K",
      "DEF",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
    ],
    previous_league_id: "863914905626140672",
    name: "Shoulda bros",
    metadata: {
      latest_league_winner_roster_id: "10",
      keeper_deadline: "0",
      auto_continue: "on",
    },
    loser_bracket_id: null,
    league_id: "1001730909340565504",
    last_transaction_id: 1007153667680161792,
    last_read_id: "1011649957293547520",
    last_pinned_message_id: null,
    last_message_time: 1695558654667,
    last_message_text_map: null,
    last_message_id: "1011649957293547520",
    last_message_attachment: null,
    last_author_is_bot: true,
    last_author_id: "166666666666666666",
    last_author_display_name: "sys",
    last_author_avatar: null,
    group_id: null,
    draft_id: "1001730909340565505",
    display_order: 0,
    company_id: null,
    bracket_id: null,
    avatar: null,
  },
  {
    total_rosters: 14,
    status: "in_season",
    sport: "nfl",
    shard: 398,
    settings: {
      daily_waivers_last_ran: 6,
      reserve_allow_cov: 0,
      reserve_slots: 1,
      leg: 3,
      offseason_adds: 0,
      bench_lock: 0,
      trade_review_days: 2,
      league_average_match: 0,
      waiver_type: 0,
      max_keepers: 1,
      type: 0,
      pick_trading: 1,
      disable_trades: 0,
      daily_waivers: 0,
      taxi_years: 0,
      trade_deadline: 11,
      veto_show_votes: 0,
      reserve_allow_sus: 1,
      reserve_allow_out: 1,
      playoff_round_type: 0,
      waiver_day_of_week: 2,
      taxi_allow_vets: 0,
      reserve_allow_dnr: 0,
      veto_auto_poll: 0,
      commissioner_direct_invite: 0,
      reserve_allow_doubtful: 0,
      waiver_clear_days: 2,
      playoff_week_start: 15,
      daily_waivers_days: 5461,
      last_scored_leg: 2,
      taxi_slots: 0,
      playoff_type: 0,
      daily_waivers_hour: 0,
      num_teams: 14,
      veto_votes_needed: 4,
      playoff_teams: 8,
      playoff_seed_type: 0,
      start_week: 1,
      reserve_allow_na: 0,
      draft_rounds: 3,
      taxi_deadline: 0,
      waiver_bid_min: 0,
      capacity_override: 0,
      divisions: 0,
      disable_adds: 0,
      waiver_budget: 100,
      last_report: 2,
      best_ball: 0,
    },
    season_type: "regular",
    season: "2023",
    scoring_settings: {
      st_ff: 1.0,
      pts_allow_7_13: 4.0,
      def_st_ff: 1.0,
      rec_yd: 0.1,
      fum_rec_td: 6.0,
      pts_allow_35p: -4.0,
      pts_allow_28_34: -1.0,
      fum: 0.0,
      rush_yd: 0.1,
      pass_td: 4.0,
      blk_kick: 2.0,
      pass_yd: 0.04,
      safe: 2.0,
      def_td: 6.0,
      fgm_50p: 5.0,
      def_st_td: 6.0,
      fum_rec: 2.0,
      rush_2pt: 2.0,
      xpm: 1.0,
      pts_allow_21_27: 0.0,
      fgm_20_29: 3.0,
      pts_allow_1_6: 7.0,
      fum_lost: -2.0,
      def_st_fum_rec: 1.0,
      int: 2.0,
      fgm_0_19: 3.0,
      pts_allow_14_20: 1.0,
      rec: 1.0,
      ff: 1.0,
      fgmiss: -1.0,
      st_fum_rec: 1.0,
      rec_2pt: 2.0,
      rush_td: 6.0,
      xpmiss: -1.0,
      fgm_30_39: 3.0,
      rec_td: 6.0,
      st_td: 6.0,
      pass_2pt: 2.0,
      pts_allow_0: 10.0,
      pass_int: -1.0,
      fgm_40_49: 4.0,
      sack: 1.0,
    },
    roster_positions: [
      "QB",
      "RB",
      "RB",
      "WR",
      "WR",
      "TE",
      "FLEX",
      "FLEX",
      "K",
      "DEF",
      "BN",
      "BN",
      "BN",
    ],
    previous_league_id: null,
    name: "Mission: Football",
    metadata: { keeper_deadline: "0", auto_continue: "on" },
    loser_bracket_id: null,
    league_id: "998397147596935168",
    last_transaction_id: null,
    last_read_id: "1011705422761406464",
    last_pinned_message_id: null,
    last_message_time: 1695571878665,
    last_message_text_map: null,
    last_message_id: "1011705422761406464",
    last_message_attachment: null,
    last_author_is_bot: true,
    last_author_id: "166666666666666666",
    last_author_display_name: "sys",
    last_author_avatar: null,
    group_id: null,
    draft_id: "998397148578394112",
    display_order: 0,
    company_id: null,
    bracket_id: null,
    avatar: "9e143f02df8cc9423bd119f1e0d535a6",
  },
  {
    total_rosters: 10,
    status: "in_season",
    sport: "nfl",
    shard: 984,
    settings: {
      daily_waivers_last_ran: 30,
      reserve_allow_cov: 1,
      reserve_slots: 2,
      leg: 3,
      offseason_adds: 0,
      bench_lock: 0,
      trade_review_days: 2,
      league_average_match: 0,
      waiver_type: 1,
      max_keepers: 1,
      type: 0,
      pick_trading: 1,
      disable_trades: 0,
      daily_waivers: 0,
      taxi_years: 0,
      trade_deadline: 12,
      veto_show_votes: 1,
      reserve_allow_sus: 1,
      reserve_allow_out: 1,
      playoff_round_type: 0,
      waiver_day_of_week: 2,
      taxi_allow_vets: 0,
      reserve_allow_dnr: 1,
      veto_auto_poll: 1,
      commissioner_direct_invite: 0,
      reserve_allow_doubtful: 1,
      waiver_clear_days: 2,
      playoff_week_start: 15,
      daily_waivers_days: 5461,
      last_scored_leg: 2,
      taxi_slots: 0,
      playoff_type: 0,
      daily_waivers_hour: 0,
      num_teams: 10,
      veto_votes_needed: 5,
      playoff_teams: 6,
      playoff_seed_type: 0,
      start_week: 1,
      reserve_allow_na: 1,
      draft_rounds: 3,
      taxi_deadline: 0,
      waiver_bid_min: 0,
      capacity_override: 0,
      disable_adds: 0,
      waiver_budget: 100,
      last_report: 2,
      best_ball: 0,
    },
    season_type: "regular",
    season: "2023",
    scoring_settings: {
      st_ff: 1.0,
      pts_allow_7_13: 4.0,
      def_st_ff: 1.0,
      rec_yd: 0.1,
      fum_rec_td: 6.0,
      pts_allow_35p: -4.0,
      pts_allow_28_34: -1.0,
      fum: 0.0,
      rush_yd: 0.1,
      pass_td: 4.0,
      blk_kick: 2.0,
      fgmiss_40_49: -1.0,
      pass_yd: 0.04,
      safe: 2.0,
      def_td: 6.0,
      fgm_50p: 3.0,
      def_st_td: 6.0,
      fum_rec: 2.0,
      rush_2pt: 2.0,
      fgmiss_0_19: -3.0,
      xpm: 1.0,
      pts_allow_21_27: 0.0,
      fgm_20_29: 2.0,
      fgmiss_20_29: -2.0,
      pts_allow_1_6: 7.0,
      fum_lost: -2.0,
      def_st_fum_rec: 1.0,
      int: 2.0,
      fgm_0_19: 1.0,
      pts_allow_14_20: 1.0,
      rec: 0.5,
      fgmiss_30_39: -1.5,
      ff: 1.0,
      fgmiss: -1.0,
      st_fum_rec: 1.0,
      rec_2pt: 2.0,
      fgm: 1.0,
      rush_td: 6.0,
      xpmiss: -1.0,
      fgm_30_39: 3.0,
      rec_td: 6.0,
      st_td: 6.0,
      pass_2pt: 2.0,
      pts_allow_0: 10.0,
      fgmiss_50p: 0.0,
      pass_int: -1.0,
      fgm_40_49: 3.0,
      sack: 1.0,
    },
    roster_positions: [
      "QB",
      "RB",
      "RB",
      "WR",
      "WR",
      "TE",
      "FLEX",
      "FLEX",
      "K",
      "DEF",
      "BN",
      "BN",
      "BN",
      "BN",
      "BN",
    ],
    previous_league_id: null,
    name: "Watson’s Massage Parlor ",
    metadata: { keeper_deadline: "0", auto_continue: "on" },
    loser_bracket_id: null,
    league_id: "998344047804616704",
    last_transaction_id: 1010422084675203072,
    last_read_id: "1012105106231218176",
    last_pinned_message_id: "1010731791563022336",
    last_message_time: 1695667170630,
    last_message_text_map: null,
    last_message_id: "1012105106231218176",
    last_message_attachment: null,
    last_author_is_bot: true,
    last_author_id: "166666666666666666",
    last_author_display_name: "sys",
    last_author_avatar: null,
    group_id: null,
    draft_id: "998344050304487424",
    display_order: 0,
    company_id: null,
    bracket_id: null,
    avatar: null,
  },
];

export const testRosters = [
  {
    taxi: null,
    starters: [
      "4046",
      "5850",
      "5967",
      "6786",
      "5872",
      "10859",
      "4068",
      "2309",
      "9493",
      "4666",
      "NYJ",
    ],
    settings: {
      wins: 0,
      waiver_position: 7,
      waiver_budget_used: 0,
      waiver_adjusted: 3,
      total_moves: 0,
      ties: 0,
      ppts_decimal: 54,
      ppts: 278,
      losses: 2,
      fpts_decimal: 14,
      fpts_against_decimal: 66,
      fpts_against: 297,
      fpts: 217,
    },
    roster_id: 1,
    reserve: ["4035"],
    players: [
      "10859",
      "2309",
      "4035",
      "4046",
      "4068",
      "4666",
      "5850",
      "5872",
      "5967",
      "6786",
      "7567",
      "8136",
      "8154",
      "9493",
      "9997",
      "NYJ",
    ],
    player_map: null,
    owner_id: "739193832524161024",
    metadata: { streak: "2L", record: "LL" },
    league_id: "1004828664186376192",
    keepers: null,
    co_owners: null,
  },
  {
    taxi: null,
    starters: [
      "6768",
      "8138",
      "9221",
      "2449",
      "7569",
      "4066",
      "4983",
      "4137",
      "4171",
      "11533",
      "SF",
    ],
    settings: {
      wins: 1,
      waiver_position: 4,
      waiver_budget_used: 0,
      waiver_adjusted: 3,
      total_moves: 0,
      ties: 0,
      ppts_decimal: 10,
      ppts: 268,
      losses: 1,
      fpts_decimal: 18,
      fpts_against_decimal: 10,
      fpts_against: 200,
      fpts: 202,
    },
    roster_id: 2,
    reserve: null,
    players: [
      "11533",
      "2449",
      "3199",
      "4066",
      "4137",
      "4171",
      "4199",
      "4983",
      "6768",
      "7523",
      "7569",
      "8138",
      "8146",
      "9221",
      "SF",
    ],
    player_map: null,
    owner_id: "999566971303870464",
    metadata: {
      streak: "1L",
      restrict_pn_scoring_starters_only: "on",
      record: "WL",
      allow_pn_scoring: "on",
      allow_pn_player_injury_status: "on",
      allow_pn_inactive_starters: "on",
    },
    league_id: "1004828664186376192",
    keepers: null,
    co_owners: null,
  },
  {
    taxi: null,
    starters: [
      "6797",
      "8151",
      "6790",
      "8144",
      "8168",
      "3214",
      "7562",
      "9757",
      "8132",
      "10937",
      "BUF",
    ],
    settings: {
      wins: 2,
      waiver_position: 6,
      waiver_budget_used: 0,
      waiver_adjusted: 3,
      total_moves: 0,
      ties: 0,
      ppts_decimal: 46,
      ppts: 276,
      losses: 0,
      fpts_decimal: 66,
      fpts_against_decimal: 32,
      fpts_against: 165,
      fpts: 220,
    },
    roster_id: 3,
    reserve: ["4866"],
    players: [
      "10937",
      "3214",
      "4663",
      "4866",
      "6790",
      "6797",
      "6803",
      "6804",
      "7526",
      "7562",
      "8132",
      "8144",
      "8151",
      "8168",
      "9757",
      "BUF",
    ],
    player_map: null,
    owner_id: "1004829981286965248",
    metadata: { streak: "2W", record: "WW" },
    league_id: "1004828664186376192",
    keepers: null,
    co_owners: null,
  },
  {
    taxi: null,
    starters: [
      "6904",
      "9509",
      "3198",
      "7525",
      "1479",
      "5012",
      "4037",
      "5248",
      "5947",
      "4195",
      "BAL",
    ],
    settings: {
      wins: 2,
      waiver_position: 8,
      waiver_budget_used: 0,
      waiver_adjusted: 3,
      total_moves: 0,
      ties: 0,
      ppts_decimal: 78,
      ppts: 294,
      losses: 0,
      fpts_decimal: 12,
      fpts_against_decimal: 98,
      fpts_against: 205,
      fpts: 257,
    },
    roster_id: 4,
    reserve: null,
    players: [
      "1479",
      "3198",
      "4017",
      "4037",
      "4195",
      "5012",
      "5248",
      "5892",
      "5947",
      "6904",
      "7525",
      "8167",
      "8205",
      "9509",
      "BAL",
    ],
    player_map: null,
    owner_id: "1004831681414561792",
    metadata: { streak: "2W", record: "WW" },
    league_id: "1004828664186376192",
    keepers: null,
    co_owners: null,
  },
  {
    taxi: null,
    starters: [
      "3294",
      "8129",
      "2749",
      "7564",
      "5859",
      "1466",
      "6801",
      "2216",
      "7588",
      "650",
      "KC",
    ],
    settings: {
      wins: 1,
      waiver_position: 5,
      waiver_budget_used: 0,
      waiver_adjusted: 3,
      total_moves: 0,
      ties: 0,
      ppts_decimal: 58,
      ppts: 245,
      losses: 1,
      fpts_decimal: 18,
      fpts_against_decimal: 60,
      fpts_against: 186,
      fpts: 165,
    },
    roster_id: 5,
    reserve: null,
    players: [
      "1426",
      "1466",
      "2216",
      "2749",
      "3294",
      "5859",
      "5987",
      "650",
      "6783",
      "6801",
      "7564",
      "7588",
      "7591",
      "8129",
      "KC",
    ],
    player_map: null,
    owner_id: "1004890765345296384",
    metadata: { streak: "1W", record: "LW" },
    league_id: "1004828664186376192",
    keepers: null,
    co_owners: null,
  },
  {
    taxi: null,
    starters: [
      "4881",
      "4034",
      "7528",
      "2133",
      "5846",
      "4217",
      "8143",
      "6819",
      "8150",
      "7042",
      "PHI",
    ],
    settings: {
      wins: 0,
      waiver_position: 3,
      waiver_budget_used: 0,
      waiver_adjusted: 3,
      total_moves: 0,
      ties: 0,
      ppts_decimal: 94,
      ppts: 286,
      losses: 2,
      fpts_decimal: 24,
      fpts_against_decimal: 24,
      fpts_against: 236,
      fpts: 200,
    },
    roster_id: 6,
    reserve: null,
    players: [
      "2133",
      "4034",
      "4217",
      "4881",
      "5846",
      "5927",
      "6151",
      "6819",
      "6943",
      "7042",
      "7528",
      "8143",
      "8150",
      "9229",
      "PHI",
    ],
    player_map: null,
    owner_id: "1004950011165163520",
    metadata: { streak: "2L", record: "LL" },
    league_id: "1004828664186376192",
    keepers: null,
    co_owners: null,
  },
  {
    taxi: null,
    starters: [
      "4984",
      "7543",
      "4018",
      "3321",
      "7547",
      "2505",
      "8112",
      "2374",
      "6828",
      "5095",
      "DAL",
    ],
    settings: {
      wins: 1,
      waiver_position: 2,
      waiver_budget_used: 0,
      waiver_adjusted: 3,
      total_moves: 0,
      ties: 0,
      ppts_decimal: 30,
      ppts: 310,
      losses: 1,
      fpts_decimal: 90,
      fpts_against_decimal: 92,
      fpts_against: 219,
      fpts: 242,
    },
    roster_id: 7,
    reserve: null,
    players: [
      "1373",
      "2374",
      "2505",
      "3321",
      "4018",
      "4040",
      "4984",
      "5095",
      "5848",
      "6828",
      "6938",
      "7543",
      "7547",
      "8112",
      "DAL",
    ],
    player_map: null,
    owner_id: "1000675520486404096",
    metadata: { streak: "1L", record: "WL" },
    league_id: "1004828664186376192",
    keepers: null,
    co_owners: null,
  },
  {
    taxi: null,
    starters: [
      "1166",
      "8155",
      "7611",
      "6794",
      "9756",
      "5844",
      "8137",
      "4981",
      "4950",
      "1264",
      "PIT",
    ],
    settings: {
      wins: 1,
      waiver_position: 1,
      waiver_budget_used: 0,
      waiver_adjusted: 3,
      total_moves: 0,
      ties: 0,
      ppts_decimal: 88,
      ppts: 305,
      losses: 1,
      fpts_decimal: 76,
      fpts_against_decimal: 36,
      fpts_against: 202,
      fpts: 208,
    },
    roster_id: 8,
    reserve: ["6813"],
    players: [
      "1166",
      "1264",
      "4029",
      "4039",
      "4950",
      "4981",
      "5001",
      "5844",
      "6770",
      "6794",
      "6813",
      "7611",
      "8137",
      "8155",
      "9756",
      "PIT",
    ],
    player_map: null,
    owner_id: "1004951053076439040",
    metadata: { streak: "1W", record: "LW" },
    league_id: "1004828664186376192",
    keepers: null,
    co_owners: null,
  },
];