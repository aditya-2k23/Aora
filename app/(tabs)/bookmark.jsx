import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAppwrite from "../../lib/useAppwrite";
import { searchPosts } from "../../lib/appwrite";
import { SearchInput, VideoCard } from "../../components";
import { images } from "../../constants";

const Bookmark = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator}
            avatar={item.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4">
            <Text className="text-2xl font-psemibold text-white mt-1">
              Saved Videos
            </Text>

            <View className="mt-6 mb-8">
              <SearchInput placeholder="Search your saved videos" />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="justify-center items-center px-4">
            <Image
              source={images.empty}
              className="w-[270px] h-[215px]"
              resizeMode="contain"
            />
            <Text className="text-xl text-center mt-2 font-psemibold text-white">
              No Saved Videos Found
            </Text>
            <Text className="font-pmedium text-sm text-gray-100">
              You haven't saved any videos yet
            </Text>
          </View>
        )}
      />
      <StatusBar backgroundColor="#161622" style="light" />
      <Text className="text-slate-400 absolute left-[115px] bottom-3">
        Made with ❤️ by Aditya 🔥
      </Text>
    </SafeAreaView>
  );
};

export default Bookmark;
