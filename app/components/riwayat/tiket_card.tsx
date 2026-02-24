import { BookingTicket } from '@/types/tiket';
import { capitalizeWords } from '@/utils/capitelizeWord';
import { formatRupiah } from '@/utils/formaterRupiah';
import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import AppText from '../font/appText';
import AppTextBold from '../font/appTextBold';

const TicketCard = ({ data }: { data: BookingTicket }) => {
  
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <View style={styles.busInfo}>
            <Image source={require("../../../assets/images/icon/armada.png")} style={{ width: 22, height: 22, resizeMode: "contain" }} />
            <AppTextBold style={{ fontSize: 16, color: "#000", marginLeft: 8 }}> {data?.nama_kelas} <AppText style={styles.busSubName}>({data?.kode_rute})</AppText></AppTextBold>
          </View>
          <AppTextBold style={styles.bookingCode}>{data?.no_booking}</AppTextBold>
        </View>

        <View style={styles.divider} />

        <View style={styles.routeContainer}>
          <View style={styles.routeHeader}>
            <AppTextBold style={styles.cityText}>{data?.kota_asal}</AppTextBold>
            <View style={styles.routeLineContainer}>
               <View style={styles.dotOutline} />
               <View style={styles.dashedLineSmall} />
               <View style={styles.dotFilled} />
            </View>
            <AppTextBold style={styles.cityText}>{data?.kota_tujuan}</AppTextBold>
          </View>

          <View style={styles.addressRow}>
            <AppText style={styles.addressText}>{capitalizeWords(data?.agen_asal)}</AppText>
            <AppText style={[styles.addressText, { textAlign: 'right' }]}>
              {capitalizeWords(data?.agen_tujuan)}
            </AppText>
          </View>
        </View>
      </View>

      {/* Ticket Tear/Dashed Separator */}
      <View style={styles.separatorContainer}>
        <View style={styles.dashedSeparator} />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.statusBadge}>
          <AppText style={styles.statusText}>{data?.status_pnp}</AppText>
        </View>
        <AppText style={styles.priceText}>{formatRupiah(data?.totalNominal)}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Elevation for Android
    elevation: 5,
  },
  topSection: {
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  busInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  busName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginLeft: 8,
  },
  busSubName: {
    fontWeight: '400',
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
  bookingCode: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginBottom: 20,
  },
  routeContainer: {
    marginBottom: 2,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityText: {
    fontSize: 18,
    color: '#333',
    letterSpacing: 0.5,
  },
  routeLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  dashedLineSmall: {
    flex: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#D38A5F',
    height: 1,
    marginHorizontal: 5,
  },
  dotOutline: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#D38A5F',
  },
  dotFilled: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D38A5F',
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  addressText: {
    fontSize: 13,
    color: '#777',
    maxWidth: '45%',
  },
  separatorContainer: {
    height: 1,
    overflow: 'hidden',
  },
  dashedSeparator: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#DDD',
    marginHorizontal: -5,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  statusBadge: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'red',
  },
  statusText: {
    color: '#555',
  },
  priceText: {
    fontSize: 18,
    color: '#333',
  },
});

export default TicketCard;