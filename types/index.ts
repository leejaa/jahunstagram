export type RootStackParamList = {
  Home: { post?: string };
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
  Details: { itemId: number };
  CreatePost: undefined;
};
