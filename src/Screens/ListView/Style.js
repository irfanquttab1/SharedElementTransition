import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Card */
  card: {
    borderRadius: 12,
    backgroundColor: 'white',
    marginBottom: 24,

    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    gap: 10,
  },

  cardImg: {
    width: 100,
    height: 90,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  cardBody: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2d2d2d',
  },
  cardPrice: {
    fontSize: 12,
    fontWeight: '700',
    color: '#444',
  },
  cardStats: {
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  cardStatsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardStatsItemText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#48496c',
    marginLeft: 4,
  },
  cardFooter: {
    paddingTop: 5,
    borderTopWidth: 1,
    borderColor: '#e9e9e9',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  cardFooterText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#909090',
  },
});
