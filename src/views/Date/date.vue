

<template>
    <div class='contain'>
        <div id="accordion">
            <div class="date_str-accordion accordion-list">
                <h3>XEUtils.toStringDate () </h3>
                <div>
                    <li>任意格式字符串转为日期</li>
                    <div class="code">XEUtils.toStringDate('12/20/2017')</div>
                    <div class="code">
                        -{{xeStrDate}}-
                    </div>
                    <div class="code">XEUtils.toStringDate('2017-12-20T10:10:30.738+01:00')</div>
                    <div class="code">
                        -{{xeStrDate1}}
                    </div>
                </div>
                <h3>XEUtils.toDateString ( new Date() ) </h3>
                <div>
                    <li>日期格式化为任意格式字符串</li>
                    <div class="code">XEUtils.toDateString(new Date(XEUtils.toDateString(new Date(), 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒 ZZ 星期E e 第q季 今年第D天 a A')))</div>
                    <div class="code">yy[yyyy]-M[MM]-d[dd] h[hh](12) / H[HH](24) : m[mm] : s[ss] .S[SSS]</div>
                    <div>
                        a [A] - D[DDD] - e[E] - q[qq] - W[WW] - Z[ZZ]
                    </div>
                    <div class="code">
                        {{xeDateStr}}
                    </div>
                    <div class="code">XEUtils.toDateString(new Date())</div>
                    <div class="code">
                        {{xeDateStr1}}
                    </div>
                </div>
            </div>

            <div class="what_-accordion accordion-list">
                <h3>XEUtils.getWhatYear()</h3>
                <div>
                    <li>返回前几年或后几年的日期,可以指定年初(first)、年末(last)</li>
                    <div class="code">XEUtils.getWhatYear(new Date(), -1)</div>
                    <div class="code">
                        {{xeWhatYear}}
                    </div>
                    <div class="code">XEUtils.getWhatYear(new Date(), 1)</div>
                    <div class="code">
                        {{xeWhatYear1}}
                    </div>
                    <div class="code">XEUtils.getWhatYear(new Date(), 0, 'first')</div>
                    <div class="code">
                        {{xeWhatYear2}}
                    </div>
                </div>

                <h3>XEUtils.getWhatMonth()</h3>
                <div>
                    <li>返回前几月或后几月的日期,可以指定月初(first)、月末(last)</li>
                    <div class="code">XEUtils.getWhatMonth(new Date(), -1)</div>
                    <div class="code">
                        {{xeWhatMonth}}
                    </div>
                    <div class="code">XEUtils.getWhatMonth(new Date(), 1)</div>
                    <div class="code">
                        {{xeWhatMonth1}}
                    </div>
                    <div class="code">XEUtils.getWhatMonth(new Date(), 0, 'last')</div>
                    <div class="code">
                        {{xeWhatMonth2}}
                    </div>
                </div>

                <h3>XEUtils.getWhatWeek()</h3>
                <div>
                    <li>返回前几周或后几周的日期,可以指定星期几(0~6)与周视图的起始天(0~6，默认1)</li>
                    <div class="code">XEUtils.getWhatWeek(new Date(), -1)</div>
                    <div class="code">
                        {{xeWhatWeek}}
                    </div>
                    <div class="code">XEUtils.getWhatWeek(new Date(), 1)</div>
                    <div class="code">
                        {{xeWhatWeek1}}
                    </div>
                    <div class="code">XEUtils.getWhatWeek(new Date(), 0, 4, 0)</div>
                    <div class="code">
                        {{xeWhatWeek2}}
                    </div>
                    <div class="code">XEUtils.getWhatWeek(new Date(), 0, 4, 1)</div>
                    <div class="code">
                        {{xeWhatWeek3}}
                    </div>
                </div>

                <h3>XEUtils.getWhatDay()</h3>
                <div>
                    <li>返回前几天或后几天的日期,可以指定当天最初时间(first)、当天的最后时间(last)</li>
                    <div class="code">XEUtils.getWhatDay(new Date(), -1)</div>
                    <div class="code">
                        {{xeWhatDay}}
                    </div>
                    <div class="code">XEUtils.getWhatDay(new Date(), 1)</div>
                    <div class="code">
                        {{xeWhatDay1}}
                    </div>
                    <div class="code">XEUtils.getWhatDay(new Date(), 0, 'last')</div>
                    <div class="code">
                        {{xeWhatDay2}}
                    </div>
                </div>
            </div>

            <div class="count_-accordion accordion-list">
                <h3>parseInt () </h3>
                <div>
                    <li>转整数</li>
                    <div class="code">parseInt ('3423.34')</div>
                    <div class="code">
                        -{{js2Int}}-
                    </div>
                    <div class="code">parseInt ('342strrt')</div>
                    <div class="code">
                        -{{js2Int1}}-
                    </div>
                </div>
            </div>

            <div class="days_of-accordion accordion-list">
                <h3>XEUtils.getDayOfYear() </h3>
                <div>
                    <li>返回某个年份的天数,可以指定前几个年或后几个年</li>
                    <div class="code">XEUtils.getDayOfYear(new Date()) </div>
                    <div class="code">
                        -{{xeDaysOfYear}}-
                    </div>
                </div>
                <h3>XEUtils.getDayOfMonth () </h3>
                <div>
                    <li>返回某个年份的天数,可以指定前几个年或后几个年</li>
                    <div class="code">XEUtils.getDayOfMonth(new Date()) </div>
                    <div class="code">
                        -{{xeDaysOfMonth}}-
                    </div>
                </div>
            </div>

            <div class="days_diff-accordion accordion-list">
                <h3>parseInt () </h3>
                <div>
                    <li>转整数</li>
                    <div class="code">parseInt ('3423.34')</div>
                    <div class="code">
                        -{{js2Int}}-
                    </div>
                    <div class="code">parseInt ('342strrt')</div>
                    <div class="code">
                        -{{js2Int1}}-
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
    import $ from 'jquery'
    import XEUtils from 'xe-utils'
    export default {
        data() {
            return {
                xeStrDate: null,
                xeStrDate1: null,
                xeStrDate2: null,
                xeDateStr: null,
                xeDateStr1: null,

                xeWhatYear: null,
                xeWhatYear1: null,
                xeWhatYear2: null,

                xeWhatMonth: null,
                xeWhatMonth1: null,
                xeWhatMonth2: null,

                xeWhatWeek: null,
                xeWhatWeek1: null,
                xeWhatWeek2: null,
                xeWhatWeek3: null,

                xeWhatDay: null,
                xeWhatDay1: null,
                xeWhatDay2: null,


                xeDaysOfYear: null,
                xeDaysOfMonth: null,
            }
        },
        watch: {},
        computed: {},
        created() {
            this.$nextTick(() => {
                $(".date_str-accordion").accordion();
                $(".what_-accordion").accordion();
                $(".count_-accordion").accordion();
                $(".days_of-accordion").accordion();
                $(".days_diff-accordion").accordion();
            });
            this.xeStrDate = XEUtils.toStringDate('12/20/2017');
            this.xeStrDate1 = XEUtils.toStringDate('2017-12-20T10:10:30.738+01:00');
            this.xeStrDate2 = XEUtils.toStringDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS');

            this.xeDateStr = XEUtils.toDateString(new Date(XEUtils.toDateString(new Date(), 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒 ZZ 星期E e 第q季 今年第D天 a A')));
            this.xeDateStr1 = XEUtils.toDateString(new Date());

            this.xeWhatYear = XEUtils.getWhatYear(new Date(), -1);
            this.xeWhatYear1 = XEUtils.getWhatYear(new Date(), 1);
            this.xeWhatYear2 = XEUtils.getWhatYear(new Date(), 0, 'first');

            this.xeWhatMonth = XEUtils.getWhatMonth(new Date(), -1);
            this.xeWhatMonth1 = XEUtils.getWhatMonth(new Date(), 1);
            this.xeWhatMonth2 = XEUtils.getWhatMonth(new Date(), 0, 'last');

            this.xeWhatWeek = XEUtils.getWhatWeek(new Date(), -1);
            this.xeWhatWeek1 = XEUtils.getWhatWeek(new Date(), 1);
            this.xeWhatWeek2 = XEUtils.getWhatWeek(new Date(), 0, 4, 0);
            this.xeWhatWeek2 = XEUtils.getWhatWeek(new Date(), 0, 4, 1);

            this.xeWhatDay = XEUtils.getWhatDay(new Date(), -1);
            this.xeWhatDay1 = XEUtils.getWhatDay(new Date(), 1);
            this.xeWhatDay2 = XEUtils.getWhatDay(new Date(), 0, 'last');

            this.xeDaysOfYear = XEUtils.getDayOfYear(new Date()) ;

            this.xeDaysOfMonth = XEUtils.getDayOfMonth(new Date()) ;

        },
        mounted() { },
        methods: {},
    }
</script>
<style>
    .code {
        background-color: #333;
        line-height: 20px;
        padding: 10px 20px;
        color: #fff;
        letter-spacing: 2.5px;
        font-size: 12px;
        max-width: 100%;
        overflow-x: auto;
        margin: 20px 0;
    }

    .accordion-list.ui-accordion.ui-widget.ui-helper-reset {
        margin: 20px 0;
    }
</style>