
import { apiFetch, image_url } from '@/services/Api';
import { Image } from 'expo-image';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';



const { width } = Dimensions.get("window");

export default function Info() {
  const scrollRef = useRef<ScrollView>(null);
  const [index, setIndex] = useState(0);

  const [ slider, setSlider ] = useState<any>([]);
    
    useEffect(() => {
    apiFetch("home/list_banner", {}).then((res: any) => {
        setSlider(res.data);
    }).catch((err: any) => {
        console.log(err);
    })
    }, []);
  // 🔁 AUTO SLIDE

  const slideWidth = width - 40;
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (index + 1) % slider?.length;
      scrollRef.current?.scrollTo({
        x: next * slideWidth,
        animated: true,
      });
      setIndex(next);
    }, 3000);

    return () => clearInterval(timer);
  }, [index, slider]);

  const onMomentumScrollEnd = (e: any) => {
    const current = Math.round(e.nativeEvent.contentOffset.x / slideWidth);

    if (current === slider.length) {
      // jika di duplicate slide terakhir, scroll ke awal tanpa animasi
      scrollRef.current?.scrollTo({ x: 0, animated: false });
      setIndex(0);
    } else {
      setIndex(current);
    }
  };

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
      >
        {slider?.map((item: any, i: number) => (
          <View key={i} style={{ width: width - 40 }}>
            <Image
              source={{ uri: image_url(`assets/uploads/promo/${item.img_url}`, "backend") }}
              style={styles.image}
            />
          </View>
        ))}
      </ScrollView>

      {/* 🔵 PAGINATION */}
      <View style={styles.pagination}>
        {slider?.map((_: any, i: number) => (
          <View
            key={i}
            style={[
              styles.dot,
              index === i && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#f66a13",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#ff0000",
    width: 8,
  },
});


