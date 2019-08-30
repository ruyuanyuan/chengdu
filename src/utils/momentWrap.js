import moment from 'moment'

moment.locale('zh-cn');

export default {
    moment,
    commonHandle(date, format) {
        if (date) {
            return moment(date).format(format)
        }
        return ''
    },
    /**
     * 2019年7月18日
     * @param o
     * @returns {*|string}
     */
    dateFormat_ll(o) {
        return this.commonHandle(o, 'll')
    },
    /**
     * 2018-09-06
     * @param o
     * @returns {*|string}
     */
    dateFormat_YMD(o) {

        return this.commonHandle(o, 'YYYY-MM-DD')

    },
    /**
     * 2019-07-18 11:11:11
     * @param o
     * @returns {*|string}
     */
    dateFormat_date(o) {
        return this.commonHandle(o, 'YYYY-MM-DD HH:mm:ss')
    },
    /**
     * 2019-07-18 11:00
     * @param o
     * @returns {*|string}
     */
    dateFormat_YHMHM(o) {
        return this.commonHandle(o, 'YYYY-MM-DD HH:mm')
    },
    /**
     * 2019-07
     * @param o
     * @returns {*|string}
     */
    dateFormat_YM(o) {
        return this.commonHandle(o, 'YYYY-MM')
    },
    /**
     * 2019年7月
     * @param o
     * @returns {*|string}
     */
    dateFormat_SYM(o) {
        return this.commonHandle(o, 'YYYY年MM月')
    },
    /**
     * 08-18
     * @param o
     * @returns {*|string}
     */
    dateFormat_md(o) {
        return this.commonHandle(o, 'MM-DD')
    },
    /**
     * 11:54
     * @param o
     * @returns {*|string}
     */
    dateFormat_hm(o) {
        return this.commonHandle(o, 'HH:mm')
    }
}
