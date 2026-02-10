import { Image, StyleSheet, Text, View } from "react-native";

export default function ServiceSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Kami Memenuhi Harapan Anda
      </Text>

      <Text style={styles.subtitle}>
        Kami di sini agar Anda dapat menemukan keamanan,
        kenyamanan, dan kemudahan maksimal!
      </Text>

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
          <Text style={styles.serviceTitle}>{title}</Text>
          <Text style={styles.serviceDesc}>{desc}</Text>
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
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 4,
  },
  serviceDesc: {
    fontSize: 16,
    color: "#000000ff",
  },
});
