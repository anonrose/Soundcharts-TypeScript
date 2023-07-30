
export interface AlbumResponse {
  type?: string;
  object?: Album;
  errors?: Error[];
}

export interface AlbumResponse2 {
  type?: string;
  object?: Album2;
  errors?: Error[];
}

export interface AlbumResponse3 {
  type?: string;
  object?: Album3;
  errors?: Error[];
}

export interface AlbumIdentifierCollectionResponse {
  related?: AlbumLight;
  items?: Identifier[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AlbumTrackCollectionResponse {
  related?: AlbumLight2;
  items?: AlbumTrack[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AlbumTrackCollectionResponse2 {
  related?: AlbumLight;
  items?: AlbumTrack[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface RankCollectionResponse {
  related?: AlbumLight2;
  items?: Rank[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface RankCollectionResponse2 {
  related?: AlbumLight;
  items?: Rank[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface ArtistResponse {
  type?: string;
  object?: Artist;
  errors?: Error[];
}

export interface ArtistResponse2 {
  type?: string;
  object?: Artist2;
  errors?: Error[];
}

export interface ArtistCollectionResponse {
  items?: ArtistLight[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface ArtistIdentifierCollectionResponse {
  related?: ArtistLight;
  items?: Identifier[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface SongCollectionResponse {
  related?: ArtistLight;
  items?: SongLight[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface SongCollectionResponse2 {
  related?: ArtistLight;
  items?: SongLightReleaseDate[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AlbumCollectionResponse {
  related?: ArtistLight;
  items?: AlbumLight[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AlbumCollectionResponse2 {
  related?: ArtistLight;
  items?: AlbumLightReleaseDate[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AlbumCollectionResponse3 {
  related?: ArtistLight;
  items?: AlbumLight2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AudiencePlotCollectionResponse {
  related?: SocialAccount;
  items?: AudiencePlot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface SocialPlotCollectionResponse {
  related?: SocialAccount;
  items?: SocialPlot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface GlobalAudiencePlotCollectionResponse {
  related?: SocialAccount;
  items?: Plot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface StreamingPlotCollectionResponse {
  related?: SocialAccount;
  items?: StreamingPlot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface PopularityPlotCollectionResponse {
  related?: StreamingAccount;
  items?: Plot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AudienceReportResponse {
  type?: string;
  object?: Report;
  errors?: Error[];
}

export interface AudienceReportDateCollectionResponse {
  related?: SocialAccount;
  items?: string;
  page?: OffsetPage;
  errors?: Error[];
}

export interface RankCollectionResponse3 {
  related?: ArtistLight;
  items?: Rank2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AlbumRankCollectionResponse {
  related?: ArtistLight;
  items?: AlbumRank[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface TrackCollectionResponse {
  related?: ArtistLight;
  items?: Track[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface TrackCollectionResponse2 {
  related?: ArtistLight;
  items?: Track2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface BroadcastCollectionResponse {
  related?: SongLight;
  items?: Broadcast[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface EventCollectionResponse {
  related?: EventAccount;
  items?: Event[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface TopArtistCollectionResponse {
  items?: MetricArtist[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface ChartCollectionResponse {
  items?: ChartLight[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface ChartSongRankCollectionResponse {
  related?: Ranking;
  items?: SongRank[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface ChartSongRankCollectionResponse2 {
  related?: Ranking2;
  items?: SongRank2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AvailableRankingCollectionResponse {
  related?: ChartLight;
  items?: string[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface ChartAlbumRankCollectionResponse {
  related?: Ranking;
  items?: AlbumRank2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface ChartAlbumRankCollectionResponse2 {
  related?: Ranking;
  items?: AlbumRank3[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface TiktokMusicRankCollectionResponse {
  related?: TiktokRanking;
  items?: TiktokMusicRank[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AvailableTiktokMusicRankingCollectionResponse {
  related?: TiktokChart;
  items?: string[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface ArtistIdentifierCollectionResponse2 {
  items?: ArtistIdentifier[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface IdentifiersSubmittedResponse {
  sent?: number;
  updated?: number;
  duplicate?: number;
  ignored?: number;
  errors?: Error[];
}

export interface SongIdentifierCollectionResponse {
  items?: SongIdentifier[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface PlaylistResponse {
  type?: string;
  object?: Playlist;
  errors?: Error[];
}

export interface PlaylistResponse2 {
  type?: string;
  object?: Playlist2;
  errors?: Error[];
}

export interface OwnerCollectionResponse {
  items?: Owner[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface PlaylistCollectionResponse {
  related?: Owner;
  items?: PlaylistLight[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface PlaylistCollectionResponse2 {
  related?: Owner;
  items?: PlaylistLight2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface PlaylistCollectionResponse3 {
  items?: PlaylistLight[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AudiencePlotCollectionResponse2 {
  related?: PlaylistLight;
  items?: Plot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface AudiencePlotCollectionResponse3 {
  related?: PlaylistLight2;
  items?: Plot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface PlaylistCollectionResponse4 {
  items?: PlaylistLight2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface TrackCollectionResponse3 {
  related?: TrackListing;
  items?: Track3[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface TrackCollectionResponse4 {
  related?: TrackListing2;
  items?: Track3[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface TracklistingDateCollectionResponse {
  related?: PlaylistLight;
  items?: string[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface TracklistingDateCollectionResponse2 {
  related?: PlaylistLight2;
  items?: string[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface RadioCollectionResponse {
  items?: RadioLight[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface RadioCollectionResponse2 {
  items?: Radio[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface RadioCollectionResponse3 {
  items?: RadioLight2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface LiveFeedCollectionResponse {
  related?: RadioLight;
  items?: SongBroadcast[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface PlatformCollectionResponse {
  items?: Platform[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface CountryCollectionResponse {
  items?: Country[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface SongCollectionResponse3 {
  items?: SongLightReleaseDate[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface ResolveExternalUrlResponse {
  type?: string;
  url?: string;
  uuid?: string;
  errors?: Error[];
}

export interface SongResponse {
  type?: string;
  object?: Song;
  errors?: Error[];
}

export interface SongResponse2 {
  type?: string;
  object?: Song2;
  errors?: Error[];
}

export interface SongResponse3 {
  type?: string;
  object?: Song3;
  errors?: Error[];
}

export interface SongIdentifierCollectionResponse2 {
  related?: SongLight;
  items?: Identifier[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface MusicCollectionResponse {
  related?: SongLight;
  items?: Music[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface VideoCollectionResponse {
  related?: SongLight;
  items?: Video[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface VideoCollectionResponse2 {
  related?: SongLight;
  items?: Video2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface SongPlotCollectionResponse {
  related?: SongLight;
  items?: AudiencePlot2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface SongPlotCollectionResponse2 {
  related?: SongLight;
  items?: Plot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface YoutubeViewsPlotCollectionResponse {
  related?: SongLight;
  items?: SongVideoPlot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface RankCollectionResponse4 {
  related?: SongLight;
  items?: Rank3[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface PositionCollectionResponse {
  related?: SongLight;
  items?: Position[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface PositionCollectionResponse2 {
  related?: SongLight;
  items?: Position2[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface MusicResponse {
  type?: string;
  object?: MusicFull;
  errors?: Error[];
}

export interface VideoVolumePlotCollectionResponse {
  related?: Music;
  items?: Plot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface VideoCollectionResponse3 {
  related?: Music;
  items?: Video3[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface UserResponse {
  type?: string;
  object?: UserFull;
  errors?: Error[];
}

export interface UserVideoCollectionResponse {
  related?: User;
  items?: VideoLight[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface UserAudienceCollectionResponse {
  related?: User;
  items?: Plot[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface UserAudienceCollectionResponse2 {
  related?: User;
  items?: UserAudience[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface VideoResponse {
  type?: string;
  object?: VideoFull;
  errors?: Error[];
}

export interface VideoAudienceCollectionResponse {
  related?: Video3;
  items?: VideoAudience[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface UrlsSubmittedResponse {
  type?: string;
  object?: UrlsSubmitted;
  errors?: Error[];
}

export interface ArtistCollectionResponse2 {
  items?: ArtistLight[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface SongCollectionResponse4 {
  items?: SongLight[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface LabelCollectionResponse {
  items?: Label[];
  page?: OffsetPage;
  errors?: Error[];
}

export interface Album {
  name?: string;
  creditName?: string;
  artists?: ArtistLight[];
  upc?: string;
  releaseDate?: string;
  label?: string;
  totalTracks?: number;
  copyright?: string;
  imageUrl?: string;
  uuid?: string;
}

export interface Error {
  key?: string;
  code?: number;
  message?: string;
}

export interface Album2 {
  name?: string;
  creditName?: string;
  slug?: string;
  artists?: ArtistLight[];
  upc?: string;
  releaseDate?: string;
  label?: string;
  totalTracks?: number;
  copyright?: string;
}

export interface Album3 {
  name?: string;
  creditName?: string;
  slug?: string;
  artists?: ArtistLight[];
  upc?: string;
  releaseDate?: string;
  label?: string;
  totalTracks?: number;
  copyright?: string;
  imageUrl?: string;
}

export interface AlbumLight {
  name?: string;
  creditName?: string;
  slug?: string;
}

export interface Identifier {
  platformName?: string;
  platformCode?: string;
  identifier?: string;
  url?: string;
}

export interface OffsetPage {
  offset?: number;
  limit?: number;
  next?: string;
  previous?: string;
  total?: number;
}

export interface AlbumLight2 {
  name?: string;
  creditName?: string;
  releaseDate?: string;
  uuid?: string;
}

export interface AlbumTrack {
  discNumber?: number;
  number?: number;
  song?: SongLight;
}

export interface Rank {
  chart?: Chart;
  position?: number;
  positionEvolution?: number;
  entryState?: string;
  entryDate?: string;
  rankDate?: string;
  oldPosition?: number;
  current?: boolean;
  timeOnChart?: number;
  timeOnChartUnit?: string;
}

export interface Artist {
  uuid?: string;
  slug?: string;
  name?: string;
  appUrl?: string;
  imageUrl?: string;
  countryCode?: string;
}

export interface Artist2 {
  uuid?: string;
  slug?: string;
  name?: string;
  appUrl?: string;
  imageUrl?: string;
  countryCode?: string;
  genres?: string[];
  biography?: string;
}

export interface ArtistLight {
  uuid?: string;
  slug?: string;
  name?: string;
  appUrl?: string;
  imageUrl?: string;
}

export interface SongLight {
  uuid?: string;
  name?: string;
  creditName?: string;
}

export interface SongLightReleaseDate {
  uuid?: string;
  name?: string;
  creditName?: string;
  releaseDate?: string;
}

export interface AlbumLightReleaseDate {
  name?: string;
  creditName?: string;
  slug?: string;
  releaseDate?: string;
}

export interface SocialAccount {
  artist?: ArtistLight;
  platform?: string;
  lastCrawlDate?: string;
}

export interface AudiencePlot {
  date?: string;
  likeCount?: number;
  followerCount?: number;
  followingCount?: number;
  postCount?: number;
  viewCount?: number;
}

export interface SocialPlot {
  date?: string;
  value?: number;
  cityPlots?: CityPlot[];
  countryPlots?: CountryPlot[];
}

export interface Plot {
  date?: string;
  value?: number;
}

export interface StreamingPlot {
  date?: string;
  value?: number;
  cityPlots?: CityPlot[];
  countryPlots?: CountryPlot[];
}

export interface StreamingAccount {
  artist?: ArtistLight;
  platform?: string;
  lastCrawlDate?: string;
}

export interface Report {
  top?: Top;
  audience?: Audience;
}

export interface Rank2 {
  chart?: Chart;
  position?: number;
  positionEvolution?: number;
  entryState?: string;
  entryDate?: string;
  rankDate?: string;
  oldPosition?: number;
  current?: boolean;
  timeOnChart?: number;
  timeOnChartUnit?: string;
  song?: SongLight;
}

export interface AlbumRank {
  chart?: Chart;
  position?: number;
  positionEvolution?: number;
  entryState?: string;
  entryDate?: string;
  rankDate?: string;
  current?: boolean;
  oldPosition?: number;
  timeOnChart?: number;
  timeOnChartUnit?: string;
  album?: AlbumLight;
}

export interface Track {
  playlist?: PlaylistLight;
  position?: number;
  peakPosition?: number;
  entryDate?: string;
  positionDate?: string;
  peakPositionDate?: string;
  song?: SongLight;
}

export interface Track2 {
  playlist?: PlaylistLight2;
  position?: number;
  peakPosition?: number;
  entryDate?: string;
  positionDate?: string;
  peakPositionDate?: string;
  song?: SongLight;
}

export interface Broadcast {
  airedAt?: string;
  duration?: number;
  radio?: RadioLight;
}

export interface EventAccount {
  artist?: ArtistLight;
  platform?: string;
  lastCrawlDate?: string;
}

export interface Event {
  name?: string;
  date?: string;
  type?: string;
  venue?: Venue;
  url?: string;
}

export interface MetricArtist {
  artist?: ArtistLight;
  total?: number;
  change?: number;
  percent?: number;
}

export interface ChartLight {
  name?: string;
  type?: string;
  slug?: string;
  platform?: string;
  frequency?: string;
  countryCode?: string;
  countryName?: string;
  cityName?: string;
  maxResultsCount?: number;
}

export interface Ranking {
  chart?: ChartLight;
  date?: string;
}

export interface SongRank {
  song?: SongLight;
  position?: number;
  positionEvolution?: number;
  entryState?: string;
  entryDate?: string;
  rankDate?: string;
  oldPosition?: number;
  timeOnChart?: number;
  timeOnChartUnit?: string;
}

export interface Ranking2 {
  chart?: ChartLight2;
  date?: string;
}

export interface SongRank2 {
  song?: SongLight;
  position?: number;
  positionEvolution?: number;
  metric?: number;
  entryState?: string;
  entryDate?: string;
  rankDate?: string;
  oldPosition?: number;
  timeOnChart?: number;
  timeOnChartUnit?: string;
}

export interface AlbumRank2 {
  album?: AlbumLight;
  position?: number;
  positionEvolution?: number;
  entryState?: string;
  entryDate?: string;
  rankDate?: string;
  oldPosition?: number;
  timeOnChart?: number;
  timeOnChartUnit?: string;
}

export interface AlbumRank3 {
  album?: AlbumLight2;
  position?: number;
  positionEvolution?: number;
  entryState?: string;
  entryDate?: string;
  rankDate?: string;
  oldPosition?: number;
  timeOnChart?: number;
  timeOnChartUnit?: string;
}

export interface TiktokRanking {
  chart?: TiktokChart;
  date?: string;
}

export interface TiktokMusicRank {
  music?: Music;
  song?: SongLight;
  position?: number;
  positionEvolution?: number;
  peakPosition?: number;
  entryState?: string;
  entryDate?: string;
  rankDate?: string;
  oldPosition?: number;
  timeOnChart?: number;
  timeOnChartUnit?: string;
  value?: number;
  oldValue?: number;
  totalValue?: number;
  oldTotalValue?: number;
}

export interface TiktokChart {
  frequency?: string;
  type?: string;
}

export interface ArtistIdentifier {
  platformCode?: string;
  identifier?: string;
  artist?: ArtistLight;
}

export interface SongIdentifier {
  platformCode?: string;
  identifier?: string;
  song?: SongLight;
}

export interface Playlist {
  uuid?: string;
  name?: string;
  identifier?: string;
  platform?: string;
  countryCode?: string;
  owner?: Owner;
  latestCrawlDate?: string;
  latestTrackCount?: number;
  latestSubscriberCount?: number;
  type?: string;
  refreshed?: string;
  availableCountryCodes?: string[];
}

export interface Playlist2 {
  uuid?: string;
  name?: string;
  identifier?: string;
  platform?: string;
  countryCode?: string;
  owner?: Owner;
  latestCrawlDate?: string;
  latestTrackCount?: number;
  latestSubscriberCount?: number;
  type?: string;
  refreshed?: string;
  availableCountryCodes?: string[];
  appUrl?: string;
  imageUrl?: string;
}

export interface Owner {
  name?: string;
  identifier?: string;
}

export interface PlaylistLight {
  uuid?: string;
  name?: string;
  identifier?: string;
  platform?: string;
  countryCode?: string;
  latestCrawlDate?: string;
  latestTrackCount?: number;
  latestSubscriberCount?: number;
}

export interface PlaylistLight2 {
  uuid?: string;
  name?: string;
  identifier?: string;
  platform?: string;
  countryCode?: string;
  latestCrawlDate?: string;
  latestTrackCount?: number;
  latestSubscriberCount?: number;
  type?: string;
}

export interface TrackListing {
  playlist?: PlaylistLight;
  date?: string;
}

export interface Track3 {
  position?: number;
  song?: SongLight;
}

export interface TrackListing2 {
  playlist?: PlaylistLight2;
  date?: string;
}

export interface RadioLight {
  name?: string;
  slug?: string;
  countryCode?: string;
  countryName?: string;
  cityName?: string;
  timeZone?: string;
}

export interface Radio {
  name?: string;
  slug?: string;
  countryCode?: string;
  countryName?: string;
  cityName?: string;
  timeZone?: string;
  reach?: number;
}

export interface RadioLight2 {
  name?: string;
  slug?: string;
  countryCode?: string;
  countryName?: string;
  cityName?: string;
  timeZone?: string;
  reach?: number;
  firstAiredAt?: string;
}

export interface SongBroadcast {
  song?: SongLight;
  airedAt?: string;
}

export interface Platform {
  name?: string;
  code?: string;
}

export interface Country {
  name?: string;
  countryCode?: string;
}

export interface Song {
  uuid?: string;
  name?: string;
  isrc?: string;
  creditName?: string;
  artists?: ArtistLight[];
  releaseDate?: string;
  label?: string;
  copyright?: string;
  appUrl?: string;
  imageUrl?: string;
}

export interface Song2 {
  uuid?: string;
  name?: string;
  isrc?: Isrc;
  creditName?: string;
  artists?: ArtistLight[];
  releaseDate?: string;
  label?: string;
  copyright?: string;
  appUrl?: string;
  imageUrl?: string;
  genres?: Genre[];
  composers?: string[];
}

export interface Song3 {
  uuid?: string;
  name?: string;
  isrc?: Isrc;
  creditName?: string;
  artists?: ArtistLight[];
  releaseDate?: string;
  copyright?: string;
  appUrl?: string;
  imageUrl?: string;
  genres?: Genre[];
  composers?: string[];
  labels?: Label2[];
}

export interface Music {
  identifier?: string;
  title?: string;
  authorName?: string;
  url?: string;
  imgUrl?: string;
}

export interface Video {
  identifier?: string;
  url?: string;
}

export interface Video2 {
  identifier?: string;
  url?: string;
  name?: string;
  creditName?: string;
}

export interface AudiencePlot2 {
  date?: string;
  plots?: Plot2[];
}

export interface SongVideoPlot {
  date?: string;
  videoPlots?: Plot[];
}

export interface Rank3 {
  chart?: Chart;
  position?: number;
  positionEvolution?: number;
  entryState?: string;
  entryDate?: string;
  rankDate?: string;
  oldPosition?: number;
  current?: boolean;
  timeOnChart?: number;
  timeOnChartUnit?: string;
}

export interface Position {
  playlist?: PlaylistLight;
  position?: number;
  peakPosition?: number;
  entryDate?: string;
  positionDate?: string;
  peakPositionDate?: string;
}

export interface Position2 {
  playlist?: PlaylistLight2;
  position?: number;
  peakPosition?: number;
  entryDate?: string;
  positionDate?: string;
  peakPositionDate?: string;
}

export interface MusicFull {
  identifier?: string;
  title?: string;
  authorName?: string;
  url?: string;
  imgUrl?: string;
  song?: SongLight;
  latestCrawlDate?: string;
  firstCrawlDate?: string;
}

export interface Video3 {
  identifier?: string;
  createdAt?: string;
  latestAudience?: VideoAudience;
  user?: User;
}

export interface UserFull {
  identifier?: string;
  username?: string;
  latestFollowerCount?: number;
  latestCrawlDate?: string;
  firstCrawlDate?: string;
}

export interface User {
  identifier?: string;
  username?: string;
  lastFollowerCount?: number;
}

export interface VideoLight {
  identifier?: string;
  createdAt?: string;
  latestAudience?: VideoAudience;
}

export interface UserAudience {
  date?: string;
  likeCount?: number;
  followerCount?: number;
  followingCount?: number;
}

export interface VideoFull {
  identifier?: string;
  createdAt?: string;
  latestAudience?: VideoAudience;
  user?: User;
  latestCrawlDate?: string;
  firstCrawlDate?: string;
}

export interface VideoAudience {
  date?: string;
  commentCount?: number;
  likeCount?: number;
  playCount?: number;
  shareCount?: number;
}

export interface UrlsSubmitted {
  invalidUrls?: string[];
  validUrls?: string[];
}

export interface Label {
  label?: string;
}

export interface Chart {
  name?: string;
  type?: string;
  slug?: string;
  platform?: string;
  frequency?: string;
  countryCode?: string;
  countryName?: string;
  cityName?: string;
  maxResultsCount?: number;
}

export interface CityPlot {
  date?: string;
  value?: number;
  countryName?: string;
  countryCode?: string;
  region?: string;
  cityName?: string;
}

export interface CountryPlot {
  date?: string;
  value?: number;
  countryName?: string;
  countryCode?: string;
}

export interface Top {
  mentions?: CodeWeight[];
  hashtags?: CodeWeight[];
  posts?: Post[];
}

export interface Audience {
  stats?: Stats;
  audienceLike?: AudienceDetail;
  audienceFollower?: AudienceDetail;
  brandsAffinity?: string[];
  interests?: string[];
}

export interface Venue {
  name?: string;
  cityName?: string;
  countryCode?: string;
  countryName?: string;
  capacity?: string;
  popularity?: string;
}

export interface ChartLight2 {
  name?: string;
  type?: string;
  slug?: string;
  platform?: string;
  frequency?: string;
  countryCode?: string;
  countryName?: string;
  cityName?: string;
  maxResultsCount?: number;
  metric?: Metric;
}

export interface Isrc {
  value?: string;
  countryCode?: string;
  countryName?: string;
}

export interface Genre {
  root?: string;
  sub?: string[];
}

export interface Label2 {
  name?: string;
  type?: string;
}

export interface Plot2 {
  identifier?: string;
  value?: number;
}

export interface CodeWeight {
  code?: string;
  weight?: number;
}

export interface Post {
  likeCount?: number;
  commentCount?: number;
  date?: string;
  imageUrl?: string;
  url?: string;
  text?: string;
  mentions?: string[];
}

export interface Stats {
  followerCount?: number;
  postCount?: number;
  viewCount?: number;
  engagementCount?: number;
  averageLikesPerPost?: number;
  averageCommentsPerPost?: number;
  averageViewsPerPost?: number;
  engagementRate?: number;
}

export interface AudienceDetail {
  genders?: CodeWeight[];
  ages?: CodeWeight[];
  gendersPerAge?: GenderPerAge[];
  ethnicities?: CodeWeight[];
  languages?: CodeWeight[];
  countries?: CountryWeight[];
  cities?: CityWeight[];
  notableUsers?: User2[];
}

export interface Metric {
  type?: string;
  description?: string;
}

export interface GenderPerAge {
  code?: string;
  maleWeight?: number;
  femaleWeight?: number;
}

export interface CountryWeight {
  weight?: number;
  countryName?: string;
  countryCode?: string;
}

export interface CityWeight {
  weight?: number;
  countryName?: string;
  countryCode?: string;
  region?: string;
  cityName?: string;
}

export interface User2 {
  username?: string;
  fullName?: string;
  followerCount?: number;
  engagementCount?: number;
  url?: string;
  imageUrl?: string;
  countryCode?: string;
  countryName?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  secure?: boolean;
  path: string;
  type?: ContentType;
  query?: QueryParamsType;
  format?: ResponseFormat;
  body?: unknown;
  baseUrl?: string;
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "//customer.api.soundcharts.com";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
          .then((data) => {
            if (r.ok) {
              r.data = data;
            } else {
              r.error = data;
            }
            return r;
          })
          .catch((e) => {
            r.error = e;
            return r;
          });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    v2AlbumByUuidDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<AlbumResponse, void>({
        path: `/api/v2/album/by-uuid/${uuid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2AlbumBySlugDetail: (slug: string, params: RequestParams = {}) =>
      this.request<AlbumResponse2, void>({
        path: `/api/v2/album/by-slug/${slug}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v215AlbumBySlugDetail: (slug: string, params: RequestParams = {}) =>
      this.request<AlbumResponse2, void>({
        path: `/api/v2.15/album/by-slug/${slug}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2AlbumByUpcDetail: (upc: string, params: RequestParams = {}) =>
      this.request<AlbumResponse2, void>({
        path: `/api/v2/album/by-upc/${upc}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v215AlbumByUpcDetail: (upc: string, params: RequestParams = {}) =>
      this.request<AlbumResponse3, void>({
        path: `/api/v2.15/album/by-upc/${upc}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v226AlbumByUpcDetail: (upc: string, params: RequestParams = {}) =>
      this.request<AlbumResponse, void>({
        path: `/api/v2.26/album/by-upc/${upc}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2AlbumByPlatformDetail: (platform: string, identifier: string, params: RequestParams = {}) =>
      this.request<AlbumResponse2, void>({
        path: `/api/v2/album/by-platform/${platform}/${identifier}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v215AlbumByPlatformDetail: (platform: string, identifier: string, params: RequestParams = {}) =>
      this.request<AlbumResponse3, void>({
        path: `/api/v2.15/album/by-platform/${platform}/${identifier}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v226AlbumByPlatformDetail: (platform: string, identifier: string, params: RequestParams = {}) =>
      this.request<AlbumResponse, void>({
        path: `/api/v2.26/album/by-platform/${platform}/${identifier}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v226AlbumIdentifiersDetail: (
      uuid: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlbumIdentifierCollectionResponse, void>({
        path: `/api/v2.26/album/${uuid}/identifiers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2AlbumIdentifiersDetail: (
      slug: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlbumIdentifierCollectionResponse, void>({
        path: `/api/v2/album/${slug}/identifiers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v226AlbumTracksDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<AlbumTrackCollectionResponse, void>({
        path: `/api/v2.26/album/${uuid}/tracks`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2AlbumTracksDetail: (slug: string, params: RequestParams = {}) =>
      this.request<AlbumTrackCollectionResponse2, void>({
        path: `/api/v2/album/${slug}/tracks`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v226AlbumChartsRanksDetail: (
      uuid: string,
      platform: string,
      query?: {
        currentOnly?: number;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RankCollectionResponse, void>({
        path: `/api/v2.26/album/${uuid}/charts/ranks/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2AlbumChartsRanksDetail: (
      slug: string,
      platform: string,
      query?: {
        currentOnly?: number;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RankCollectionResponse2, void>({
        path: `/api/v2/album/${slug}/charts/ranks/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<ArtistResponse, void>({
        path: `/api/v2/artist/${uuid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v29ArtistDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<ArtistResponse2, void>({
        path: `/api/v2.9/artist/${uuid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ArtistByPlatformDetail: (platform: string, identifier: string, params: RequestParams = {}) =>
      this.request<ArtistResponse, void>({
        path: `/api/v2/artist/by-platform/${platform}/${identifier}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v29ArtistByPlatformDetail: (platform: string, identifier: string, params: RequestParams = {}) =>
      this.request<ArtistResponse2, void>({
        path: `/api/v2.9/artist/by-platform/${platform}/${identifier}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ArtistByCountryDetail: (
      countryCode: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtistCollectionResponse, void>({
        path: `/api/v2/artist/by-country/${countryCode}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistIdentifiersDetail: (
      uuid: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtistIdentifierCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/identifiers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistSongsDetail: (
      uuid: string,
      query?: {
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/songs`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v221ArtistSongsDetail: (
      uuid: string,
      query?: {
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongCollectionResponse2, void>({
        path: `/api/v2.21/artist/${uuid}/songs`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistAlbumsDetail: (
      uuid: string,
      query?: {
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlbumCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/albums`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v218ArtistAlbumsDetail: (
      uuid: string,
      query?: {
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlbumCollectionResponse2, void>({
        path: `/api/v2.18/artist/${uuid}/albums`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v226ArtistAlbumsDetail: (
      uuid: string,
      query?: {
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlbumCollectionResponse3, void>({
        path: `/api/v2.26/artist/${uuid}/albums`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistRelatedDetail: (
      uuid: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtistCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/related`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistAudienceDetail: (
      uuid: string,
      platform: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AudiencePlotCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/audience/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistSocialFollowersDetail: (
      uuid: string,
      platform: string,
      year: number,
      month: number,
      params: RequestParams = {},
    ) =>
      this.request<SocialPlotCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/social/${platform}/followers/${year}/${month}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ArtistSocialDetail: (
      uuid: string,
      platform: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SocialPlotCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/social/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistStreamingListeningDetail: (
      uuid: string,
      platform: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GlobalAudiencePlotCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/streaming/${platform}/listening`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistStreamingSpotifyListenersDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<StreamingPlotCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/streaming/spotify/listeners`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ArtistStreamingSpotifyListenersDetail2: (uuid: string, year: number, month: number, params: RequestParams = {}) =>
      this.request<StreamingPlotCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/streaming/spotify/listeners/${year}/${month}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ArtistStreamingYoutubeViewsDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<StreamingPlotCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/streaming/youtube/views`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ArtistStreamingYoutubeViewsDetail2: (uuid: string, year: number, month: number, params: RequestParams = {}) =>
      this.request<StreamingPlotCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/streaming/youtube/views/${year}/${month}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ArtistSpotifyPopularityDetail: (
      uuid: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PopularityPlotCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/spotify/popularity`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistAudienceReportLatestDetail: (uuid: string, platform: string, params: RequestParams = {}) =>
      this.request<AudienceReportResponse, void>({
        path: `/api/v2/artist/${uuid}/audience/${platform}/report/latest`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ArtistAudienceReportAvailableDatesDetail: (
      uuid: string,
      platform: string,
      query?: {
        startDate?: string;
        endDate?: string;
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AudienceReportDateCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/audience/${platform}/report/available-dates`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistAudienceReportDetail: (uuid: string, platform: string, date: string, params: RequestParams = {}) =>
      this.request<AudienceReportResponse, void>({
        path: `/api/v2/artist/${uuid}/audience/${platform}/report/${date}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ArtistChartsSongRanksDetail: (
      uuid: string,
      platform: string,
      query?: {
        currentOnly?: number;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RankCollectionResponse3, void>({
        path: `/api/v2/artist/${uuid}/charts/song/ranks/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistChartsAlbumRanksDetail: (
      uuid: string,
      platform: string,
      query?: {
        currentOnly?: number;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlbumRankCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/charts/album/ranks/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistPlaylistCurrentDetail: (
      uuid: string,
      platform: string,
      query?: {
        type?: string;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TrackCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/playlist/current/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v220ArtistPlaylistCurrentDetail: (
      uuid: string,
      platform: string,
      query?: {
        type?: string;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TrackCollectionResponse2, void>({
        path: `/api/v2.20/artist/${uuid}/playlist/current/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistBroadcastsDetail: (
      uuid: string,
      query?: {
        radioSlugs?: string;
        countryCode?: string;
        startDate?: string;
        endDate?: string;
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BroadcastCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/broadcasts`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistSongkickEventsDetail: (
      uuid: string,
      query?: {
        type?: string;
        periodType?: string;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventCollectionResponse, void>({
        path: `/api/v2/artist/${uuid}/songkick/events`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v219ArtistSongkickEventsDetail: (
      uuid: string,
      query?: {
        type?: string;
        periodType?: string;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventCollectionResponse, void>({
        path: `/api/v2.19/artist/${uuid}/songkick/events`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistSourcesAddCreate: (
      uuid: string,
      body: {
        urls?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtistResponse, void>({
        path: `/api/v2/artist/${uuid}/sources/add`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    v2TopArtistDetail: (
      platform: string,
      metricType: string,
      query: {
        sortBy: string;
        period: string;
        artistCountryCode?: string;
        minValue?: number;
        maxValue?: number;
        minChange?: number;
        maxChange?: number;
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TopArtistCollectionResponse, void>({
        path: `/api/v2/top-artist/${platform}/${metricType}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2TopArtistCountryDetail: (
      platform: string,
      countryCode: string,
      metricType: string,
      query: {
        sortBy: string;
        period: string;
        artistCountryCode?: string;
        minValue?: number;
        maxValue?: number;
        minChange?: number;
        maxChange?: number;
        token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TopArtistCollectionResponse, void>({
        path: `/api/v2/top-artist/country/${countryCode}/${platform}/${metricType}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartSongByPlatformDetail: (
      platform: string,
      query?: {
        countryCode?: string;
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChartCollectionResponse, void>({
        path: `/api/v2/chart/song/by-platform/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartSongRankingLatestDetail: (
      slug: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChartSongRankCollectionResponse, void>({
        path: `/api/v2/chart/song/${slug}/ranking/latest`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v214ChartSongRankingLatestDetail: (
      slug: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChartSongRankCollectionResponse2, void>({
        path: `/api/v2.14/chart/song/${slug}/ranking/latest`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartSongAvailableRankingsDetail: (
      slug: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AvailableRankingCollectionResponse, void>({
        path: `/api/v2/chart/song/${slug}/available-rankings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartSongRankingDetail: (
      slug: string,
      datetime: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChartSongRankCollectionResponse, void>({
        path: `/api/v2/chart/song/${slug}/ranking/${datetime}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v214ChartSongRankingDetail: (
      slug: string,
      datetime: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChartSongRankCollectionResponse2, void>({
        path: `/api/v2.14/chart/song/${slug}/ranking/${datetime}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartAlbumByPlatformDetail: (
      platform: string,
      query?: {
        countryCode?: string;
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChartCollectionResponse, void>({
        path: `/api/v2/chart/album/by-platform/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartAlbumRankingLatestDetail: (
      slug: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChartAlbumRankCollectionResponse, void>({
        path: `/api/v2/chart/album/${slug}/ranking/latest`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v226ChartAlbumRankingLatestDetail: (
      slug: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChartAlbumRankCollectionResponse2, void>({
        path: `/api/v2.26/chart/album/${slug}/ranking/latest`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartAlbumAvailableRankingsDetail: (
      slug: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AvailableRankingCollectionResponse, void>({
        path: `/api/v2/chart/album/${slug}/available-rankings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartAlbumRankingDetail: (
      slug: string,
      datetime: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChartAlbumRankCollectionResponse, void>({
        path: `/api/v2/chart/album/${slug}/ranking/${datetime}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v226ChartAlbumRankingDetail: (
      slug: string,
      datetime: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ChartAlbumRankCollectionResponse2, void>({
        path: `/api/v2.26/chart/album/${slug}/ranking/${datetime}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartTiktokMusicWeeklyRankingLatestList: (
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TiktokMusicRankCollectionResponse, void>({
        path: `/api/v2/chart/tiktok/music/weekly/ranking/latest`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartTiktokMusicWeeklyAvailableRankingsList: (
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AvailableTiktokMusicRankingCollectionResponse, void>({
        path: `/api/v2/chart/tiktok/music/weekly/available-rankings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ChartTiktokMusicWeeklyRankingDetail: (
      datetime: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TiktokMusicRankCollectionResponse, void>({
        path: `/api/v2/chart/tiktok/music/weekly/ranking/${datetime}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2LibraryArtistList: (
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtistIdentifierCollectionResponse2, any>({
        path: `/api/v2/library/artist`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2LibraryArtistCreate: (
      body: {
        identifiers?: {
          identifier?: string;
          platformCode?: string;
        }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<IdentifiersSubmittedResponse, void>({
        path: `/api/v2/library/artist`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    v2LibraryArtistDelete: (
      body: {
        identifiers?: {
          identifier?: string;
          platformCode?: string;
        }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<IdentifiersSubmittedResponse, void>({
        path: `/api/v2/library/artist`,
        method: "DELETE",
        body: body,
        secure: true,
        ...params,
      }),

    v2LibrarySongList: (
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongIdentifierCollectionResponse, any>({
        path: `/api/v2/library/song`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2LibrarySongCreate: (
      body: {
        identifiers?: {
          identifier?: string;
          platformCode?: string;
        }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<IdentifiersSubmittedResponse, void>({
        path: `/api/v2/library/song`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    v2LibrarySongDelete: (
      body: {
        identifiers?: {
          identifier?: string;
          platformCode?: string;
        }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<IdentifiersSubmittedResponse, void>({
        path: `/api/v2/library/song`,
        method: "DELETE",
        body: body,
        secure: true,
        ...params,
      }),

    v2PlaylistDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<PlaylistResponse, void>({
        path: `/api/v2/playlist/${uuid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v28PlaylistDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<PlaylistResponse2, void>({
        path: `/api/v2.8/playlist/${uuid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2PlaylistByPlatformDetail: (
      platform: string,
      identifier: string,
      query?: {
        countryCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistResponse, void>({
        path: `/api/v2/playlist/by-platform/${platform}/${identifier}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v28PlaylistByPlatformDetail: (
      platform: string,
      identifier: string,
      query?: {
        countryCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistResponse2, void>({
        path: `/api/v2.8/playlist/by-platform/${platform}/${identifier}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2PlaylistCuratorsDetail: (
      platform: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<OwnerCollectionResponse, void>({
        path: `/api/v2/playlist/curators/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2PlaylistByCuratorDetail: (
      platform: string,
      curatorIdentifier: string,
      query?: {
        countryCode?: string;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistCollectionResponse, void>({
        path: `/api/v2/playlist/by-curator/${platform}/${curatorIdentifier}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v220PlaylistByCuratorDetail: (
      platform: string,
      curatorIdentifier: string,
      query?: {
        countryCode?: string;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistCollectionResponse2, void>({
        path: `/api/v2.20/playlist/by-curator/${platform}/${curatorIdentifier}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2PlaylistByTypeDetail: (
      platform: string,
      type: string,
      query?: {
        countryCode?: string;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistCollectionResponse3, void>({
        path: `/api/v2/playlist/by-type/${platform}/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2PlaylistAudienceDetail: (
      uuid: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AudiencePlotCollectionResponse2, void>({
        path: `/api/v2/playlist/${uuid}/audience`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v220PlaylistAudienceDetail: (
      uuid: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AudiencePlotCollectionResponse3, void>({
        path: `/api/v2.20/playlist/${uuid}/audience`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v220PlaylistByTypeDetail: (
      platform: string,
      type: string,
      query?: {
        countryCode?: string;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistCollectionResponse4, void>({
        path: `/api/v2.20/playlist/by-type/${platform}/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2PlaylistTracksLatestDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<TrackCollectionResponse3, void>({
        path: `/api/v2/playlist/${uuid}/tracks/latest`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v220PlaylistTracksLatestDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<TrackCollectionResponse4, void>({
        path: `/api/v2.20/playlist/${uuid}/tracks/latest`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2PlaylistAvailableTracklistingsDetail: (
      uuid: string,
      query?: {
        endDate?: string;
        period?: number;
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TracklistingDateCollectionResponse, void>({
        path: `/api/v2/playlist/${uuid}/available-tracklistings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v220PlaylistAvailableTracklistingsDetail: (
      uuid: string,
      query?: {
        endDate?: string;
        period?: number;
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TracklistingDateCollectionResponse2, void>({
        path: `/api/v2.20/playlist/${uuid}/available-tracklistings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2PlaylistTracksDetail: (
      uuid: string,
      datetime: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TrackCollectionResponse3, void>({
        path: `/api/v2/playlist/${uuid}/tracks/${datetime}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v220PlaylistTracksDetail: (
      uuid: string,
      datetime: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TrackCollectionResponse4, void>({
        path: `/api/v2.20/playlist/${uuid}/tracks/${datetime}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2RadioList: (
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RadioCollectionResponse, any>({
        path: `/api/v2/radio`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v218RadioList: (
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RadioCollectionResponse2, any>({
        path: `/api/v2.18/radio`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v222RadioList: (
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RadioCollectionResponse3, any>({
        path: `/api/v2.22/radio`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2RadioByCountryDetail: (
      countryCode: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RadioCollectionResponse, void>({
        path: `/api/v2/radio/by-country/${countryCode}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v218RadioByCountryDetail: (
      countryCode: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RadioCollectionResponse2, void>({
        path: `/api/v2.18/radio/by-country/${countryCode}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v222RadioByCountryDetail: (
      countryCode: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RadioCollectionResponse3, void>({
        path: `/api/v2.22/radio/by-country/${countryCode}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2RadioLiveFeedDetail: (
      slug: string,
      query?: {
        startDate?: string;
        endDate?: string;
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<LiveFeedCollectionResponse, any>({
        path: `/api/v2/radio/${slug}/live-feed`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ReferentialPlatformsList: (params: RequestParams = {}) =>
      this.request<PlatformCollectionResponse, any>({
        path: `/api/v2/referential/platforms`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ReferentialPlatformsSocialList: (params: RequestParams = {}) =>
      this.request<PlatformCollectionResponse, any>({
        path: `/api/v2/referential/platforms/social`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ReferentialPlatformsStreamingList: (params: RequestParams = {}) =>
      this.request<PlatformCollectionResponse, any>({
        path: `/api/v2/referential/platforms/streaming`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ChartSongPlatformsList: (params: RequestParams = {}) =>
      this.request<PlatformCollectionResponse, any>({
        path: `/api/v2/chart/song/platforms`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2ChartAlbumPlatformsList: (params: RequestParams = {}) =>
      this.request<PlatformCollectionResponse, any>({
        path: `/api/v2/chart/album/platforms`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2PlaylistPlatformsList: (params: RequestParams = {}) =>
      this.request<PlatformCollectionResponse, any>({
        path: `/api/v2/playlist/platforms`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2RadioCountriesList: (
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CountryCollectionResponse, any>({
        path: `/api/v2/radio/countries`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2ArtistSearchDetail: (
      term: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtistCollectionResponse, void>({
        path: `/api/v2/artist/search/${term}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongSearchDetail: (
      term: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongCollectionResponse3, void>({
        path: `/api/v2/song/search/${term}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SearchExternalUrlList: (
      query: {
        platformUrl: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResolveExternalUrlResponse, void>({
        path: `/api/v2/search/external/url`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<SongResponse, void>({
        path: `/api/v2/song/${uuid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v28SongDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<SongResponse2, void>({
        path: `/api/v2.8/song/${uuid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v225SongDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<SongResponse3, void>({
        path: `/api/v2.25/song/${uuid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2SongByIsrcDetail: (isrc: string, params: RequestParams = {}) =>
      this.request<SongResponse, void>({
        path: `/api/v2/song/by-isrc/${isrc}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v28SongByIsrcDetail: (isrc: string, params: RequestParams = {}) =>
      this.request<SongResponse2, void>({
        path: `/api/v2.8/song/by-isrc/${isrc}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v225SongByIsrcDetail: (isrc: string, params: RequestParams = {}) =>
      this.request<SongResponse3, void>({
        path: `/api/v2.25/song/by-isrc/${isrc}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2SongByPlatformDetail: (platform: string, identifier: string, params: RequestParams = {}) =>
      this.request<SongResponse, void>({
        path: `/api/v2/song/by-platform/${platform}/${identifier}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v28SongByPlatformDetail: (platform: string, identifier: string, params: RequestParams = {}) =>
      this.request<SongResponse2, void>({
        path: `/api/v2.8/song/by-platform/${platform}/${identifier}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v225SongByPlatformDetail: (platform: string, identifier: string, params: RequestParams = {}) =>
      this.request<SongResponse3, void>({
        path: `/api/v2.25/song/by-platform/${platform}/${identifier}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2SongIdentifiersDetail: (
      uuid: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongIdentifierCollectionResponse2, void>({
        path: `/api/v2/song/${uuid}/identifiers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongTiktokMusicsDetail: (
      uuid: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<MusicCollectionResponse, void>({
        path: `/api/v2/song/${uuid}/tiktok/musics`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongYoutubeVideosDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<VideoCollectionResponse, void>({
        path: `/api/v2/song/${uuid}/youtube/videos`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v216SongYoutubeVideosDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<VideoCollectionResponse2, void>({
        path: `/api/v2.16/song/${uuid}/youtube/videos`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2SongAudienceDetail: (
      uuid: string,
      platform: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongPlotCollectionResponse, void>({
        path: `/api/v2/song/${uuid}/audience/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongSpotifyStreamDetail: (
      uuid: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongPlotCollectionResponse2, void>({
        path: `/api/v2/song/${uuid}/spotify/stream`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v224SongSpotifyStreamDetail: (
      uuid: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongPlotCollectionResponse, void>({
        path: `/api/v2.24/song/${uuid}/spotify/stream`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongYoutubeViewsDetail: (
      uuid: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<YoutubeViewsPlotCollectionResponse, void>({
        path: `/api/v2/song/${uuid}/youtube/views`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongYoutubeViewsVideoDetail: (
      uuid: string,
      identifier: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongPlotCollectionResponse2, void>({
        path: `/api/v2/song/${uuid}/youtube/views/video/${identifier}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongShazamCountDetail: (
      uuid: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongPlotCollectionResponse2, void>({
        path: `/api/v2/song/${uuid}/shazam/count`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v224SongShazamCountDetail: (
      uuid: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongPlotCollectionResponse, void>({
        path: `/api/v2.24/song/${uuid}/shazam/count`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongSpotifyIdentifierPopularityDetail: (
      uuid: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongPlotCollectionResponse, void>({
        path: `/api/v2/song/${uuid}/spotify/identifier/popularity`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongSpotifyPopularityDetail: (
      uuid: string,
      query?: {
        startDate?: string;
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongPlotCollectionResponse2, void>({
        path: `/api/v2/song/${uuid}/spotify/popularity`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongChartsRanksDetail: (
      uuid: string,
      platform: string,
      query?: {
        currentOnly?: number;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RankCollectionResponse4, void>({
        path: `/api/v2/song/${uuid}/charts/ranks/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongPlaylistCurrentDetail: (
      uuid: string,
      platform: string,
      query?: {
        type?: string;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PositionCollectionResponse, void>({
        path: `/api/v2/song/${uuid}/playlist/current/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v220SongPlaylistCurrentDetail: (
      uuid: string,
      platform: string,
      query?: {
        type?: string;
        offset?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PositionCollectionResponse2, void>({
        path: `/api/v2.20/song/${uuid}/playlist/current/${platform}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongBroadcastsDetail: (
      uuid: string,
      query?: {
        radioSlugs?: string;
        countryCode?: string;
        startDate?: string;
        endDate?: string;
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BroadcastCollectionResponse, void>({
        path: `/api/v2/song/${uuid}/broadcasts`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongBroadcastGroupsDetail: (
      uuid: string,
      query?: {
        radioSlugs?: string;
        countryCode?: string;
        startDate?: string;
        endDate?: string;
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BroadcastCollectionResponse, void>({
        path: `/api/v2/song/${uuid}/broadcast-groups`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SongSourcesAddCreate: (
      uuid: string,
      body: {
        urls?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<SongResponse, void>({
        path: `/api/v2/song/${uuid}/sources/add`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    v2TiktokMusicDetail: (identifier: string, params: RequestParams = {}) =>
      this.request<MusicResponse, void>({
        path: `/api/v2/tiktok/music/${identifier}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2TiktokMusicVideoVolumeDetail: (
      identifier: string,
      query?: {
        endDate?: string;
        period?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<VideoVolumePlotCollectionResponse, void>({
        path: `/api/v2/tiktok/music/${identifier}/video/volume`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2TiktokMusicVideosDetail: (
      identifier: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<VideoCollectionResponse3, void>({
        path: `/api/v2/tiktok/music/${identifier}/videos`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2TiktokUserDetail: (username: string, params: RequestParams = {}) =>
      this.request<UserResponse, void>({
        path: `/api/v2/tiktok/user/${username}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2TiktokUserVideosDetail: (
      username: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserVideoCollectionResponse, void>({
        path: `/api/v2/tiktok/user/${username}/videos`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2TiktokUserAudienceDetail: (
      username: string,
      query?: {
        endDate?: string;
        period?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserAudienceCollectionResponse, void>({
        path: `/api/v2/tiktok/user/${username}/audience`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v211TiktokUserAudienceDetail: (
      username: string,
      query?: {
        endDate?: string;
        period?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserAudienceCollectionResponse2, void>({
        path: `/api/v2.11/tiktok/user/${username}/audience`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2TiktokVideoDetail: (identifier: string, params: RequestParams = {}) =>
      this.request<VideoResponse, void>({
        path: `/api/v2/tiktok/video/${identifier}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2TiktokVideoAudienceDetail: (
      identifier: string,
      query?: {
        endDate?: string;
        period?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<VideoAudienceCollectionResponse, void>({
        path: `/api/v2/tiktok/video/${identifier}/audience`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2TiktokMusicUrlsAddCreate: (
      body: {
        urls?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<UrlsSubmittedResponse, void>({
        path: `/api/v2/tiktok/music/urls/add`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    v2TiktokUserUrlsAddCreate: (
      body: {
        urls?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<UrlsSubmittedResponse, void>({
        path: `/api/v2/tiktok/user/urls/add`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    v2UserBlocklistArtistsDetail: (
      email: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtistCollectionResponse2, void>({
        path: `/api/v2/user/${email}/blocklist/artists`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2UserBlocklistSongsDetail: (
      email: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SongCollectionResponse4, void>({
        path: `/api/v2/user/${email}/blocklist/songs`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2UserBlocklistLabelsDetail: (
      email: string,
      query?: {
        offset?: number;
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<LabelCollectionResponse, void>({
        path: `/api/v2/user/${email}/blocklist/labels`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    v2SwaggerJsonList: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/v2/swagger.json`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2DocJsonList: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/v2/doc.json`,
        method: "GET",
        secure: true,
        ...params,
      }),

    v2DocList: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/v2/doc`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
