import { Image, StyleSheet, View } from "react-native";
import AppText from "../font/appText";
import AppTextBold from "../font/appTextBold";

export default function ServiceSection() {
  return (
    <View style={styles.container}>
      <AppTextBold style={styles.title}>
        Kami Memenuhi Harapan Anda
      </AppTextBold>

      <AppText style={styles.subtitle}>
        Kami di sini agar Anda dapat menemukan keamanan,
        kenyamanan, dan kemudahan maksimal!
      </AppText>

      <View style={styles.listService}>
        {/* ITEM 1 */}
        <ServiceItem
          icon={require("../../../assets/images/icon/service-cleaner-w.png")}
          title="Disanitasi Sepenuhnya"
          desc="Kami memastikan armada kami bersih dan telah mengikuti protokol kesehatan yang dianjurkan"
        />

        {/* ITEM 2 */}
        <ServiceItem
          icon={require("../../../assets/images/icon/service-ontime-w.png")}
          title="Tepat Waktu"
          desc="Ketepatan waktu serta keamanan perjalanan menjadi tujuan utama kami dalam melayani penumpang"
        />

        {/* ITEM 3 */}
        <ServiceItem
          icon={require("../../../assets/images/icon/service-modern-w.png")}
          title="Bus Modern"
          desc="Kami pastikan armada kami aman, nyaman dan dilengkapi dengan fasilitas pilihan"
        />

        {/* ITEM 4 */}
        <ServiceItem
          icon={require("../../../assets/images/icon/service-cs-w.png")}
          title="24/7 Customer Service"
          desc="Jika ada keluhan atau pertanyaan, Anda dapat menghubungi nomor kami"
        />
      </View>
    </View>
  );
}

function ServiceItem({ icon, title, desc }: any) {
  return (
    <View style={styles.serviceItem}>
      <View style={styles.cardService}>
        <View style={styles.thumbIcon}>
          <Image source={icon} style={styles.icon} />
        </View>

        <View style={styles.serviceText}>
          <AppTextBold style={styles.serviceTitle}>{title}</AppTextBold>
          <AppText style={styles.serviceDesc}>{desc}</AppText>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "red",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 30,
  },
  listService: {
    gap: 16,
  },
  serviceItem: {
    width: "100%",
  },
  cardService: {
    flexDirection: "row",
    alignItems: "center",
  },
  thumbIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f40009",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  serviceText: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 15,
    color: "#000000ff",
  },
  serviceDesc: {
    fontSize: 13,
    color: "#000000ff",
  },
});
