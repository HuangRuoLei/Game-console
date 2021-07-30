//% color="#006400" weight=50 icon="\uf1b9" block="呼噜猫游戏机"
namespace HuLuMaoGame {
   // let asc16 = pins.createBuffer(1520);
   let asc16=[
        0x00000000,0x00000000,0x00000000,0x00000000 ,//" "
        0x00101010,0x10101010,0x10100000,0x10100000 ,//"!"
        0x00006C6C,0x24240000,0x00000100,0x00000000 ,//"""
        0x00242424,0x24FE4848,0x4848FC90,0x90909000 ,//"#"
        0x00103C54,0x92905038,0x14121292,0x54781000 ,//"$"
        0x0000225C,0x94A84810,0x10242A52,0x54880000 ,//"%"
        0x00003048,0x4850206E,0x54948C88,0x8A740000 ,//"&"
        0x00003030,0x10100000,0x00000000,0x00000000 ,//"'"
        0x00040810,0x10202020,0x20202010,0x10080400 ,//"("
        0x00804020,0x20101010,0x10101020,0x20408000 ,//")"
        0x00000000,0x10543810,0x38541000,0x00000000 ,//"*"
        0x00000010,0x101010FE,0x10101010,0x00000000 ,//"+"
        0x00000000,0x00000000,0x00000000,0x10102000 ,//" "
        0x00000000,0x000000FE,0x00000000,0x00000000 ,//"-"
        0x00000000,0x00000000,0x00000000,0x10100000 ,//"."
        0x00000404,0x08081010,0x20204040,0x80800000 ,//"/"
        0x00003844,0x82828282,0x82828282,0x44380000 ,//"0"
        0x00001070,0x10101010,0x10101010,0x107C0000 ,//"1"
        0x00003844,0x82820408,0x10204082,0x84FC0000 ,//"2"
        0x00003844,0x82020438,0x04020282,0x44380000 ,//"3"
        0x0000040C,0x14142424,0x4444FE04,0x040E0000 ,//"4"
        0x0000FC80,0x8080B8C4,0x82020282,0x84780000 ,//"5"
        0x00003C42,0x8280B8C4,0x82828282,0x44380000 ,//"6"
        0x00007E42,0x82040408,0x08081010,0x10100000 ,//"7"
        0x00003844,0x82824438,0x44828282,0x44380000 ,//"8"
        0x00003844,0x82828282,0x463A0282,0x44380000 ,//"9"
        0x00000000,0x10100000,0x00001010,0x00000000 ,//":"
        0x00000000,0x10100000,0x00000010,0x10200000 ,//";"
        0x00000000,0x06186080,0x60180600,0x00000000 ,//"<"
        0x00000000,0x0000FE00,0x00FE0000,0x00000000 ,//"="
        0x00000000,0xC0300C02,0x0C30C000,0x00000000 ,//">"
        0x00384482,0x82020408,0x10101000,0x10100000 ,//"?"
        0x00003844,0x829AAAAA,0xAAAAAA96,0x80423C00 ,//"@"
        0x00001010,0x10282828,0x44447C44,0x44EE0000 ,//"A"
        0x0000FC42,0x4242427C,0x42424242,0x42FC0000 ,//"B"
        0x00003C44,0x82808080,0x80808282,0x44380000 ,//"C"
        0x0000F844,0x42424242,0x42424242,0x44F80000 ,//"D"
        0x0000FC44,0x4240447C,0x44404042,0x44FC0000 ,//"E"
        0x0000FC44,0x4240447C,0x44404040,0x40F00000 ,//"F"
        0x0000344C,0x82808080,0x8E848484,0x4C340000 ,//"G"
        0x0000EE44,0x4444447C,0x44444444,0x44EE0000 ,//"H"
        0x00007C10,0x10101010,0x10101010,0x107C0000 ,//"I"
        0x00003E08,0x08080808,0x08080888,0x88700000 ,//"J"
        0x0000EE44,0x48485060,0x50484844,0x44EE0000 ,//"K"
        0x0000E040,0x40404040,0x40404042,0x44FC0000 ,//"L"
        0x0000C644,0x6C6C6C54,0x54544444,0x44EE0000 ,//"M"
        0x0000CE44,0x64646454,0x544C4C4C,0x44E40000 ,//"N"
        0x00003844,0x82828282,0x82828282,0x44380000 ,//"O"
        0x0000F844,0x42424244,0x78404040,0x40E00000 ,//"P"
        0x00003844,0x82828282,0x828282BA,0x443C0200 ,//"Q"
        0x0000F048,0x44444448,0x70484444,0x44E60000 ,//"R"
        0x00003C44,0x82804030,0x0C020282,0x44780000 ,//"S"
        0x00007C54,0x92101010,0x10101010,0x10380000 ,//"T"
        0x0000EE44,0x44444444,0x44444444,0x44380000 ,//"U"
        0x0000EE44,0x44444428,0x28282810,0x10100000 ,//"V"
        0x0000EE44,0x54545454,0x54542828,0x28280000 ,//"W"
        0x0000EE44,0x44282810,0x10282844,0x44EE0000 ,//"X"
        0x0000EE44,0x44282828,0x10101010,0x10380000 ,//"Y"
        0x00007E44,0x84080810,0x20204082,0x84FC0000 ,//"Z"
        0x001C1010,0x10101010,0x10101010,0x10101C00 ,//"["
        0x0000EE44,0x5454FE54,0x54542828,0x28280000 ,//"\"
        0x00701010,0x10101010,0x10101010,0x10107000 ,//"]"
        0x00304884,0x00000000,0x00000000,0x00000000 ,//"^"
        0x00000000,0x00000000,0x00000000,0x0000FE00 ,//"_"
        0x00402000,0x00000000,0x00000000,0x00000000 ,//"`"
        0x00000000,0x00007884,0x047C8484,0x8C760000 ,//"a"
        0x0000C040,0x40405864,0x42424242,0x64580000 ,//"b"
        0x00000000,0x00003844,0x80808080,0x44380000 ,//"c"
        0x00000C04,0x0404344C,0x84848484,0x4C360000 ,//"d"
        0x00000000,0x00007884,0x84FC8080,0x84780000 ,//"e"
        0x00001824,0x2020F820,0x20202020,0x20700000 ,//"f"
        0x00000000,0x00003A44,0x4478807C,0x82827C00 ,//"g"
        0x0000C040,0x40405864,0x44444444,0x44EE0000 ,//"h"
        0x00001010,0x00003010,0x10101010,0x10380000 ,//"i"
        0x00001010,0x00003010,0x10101010,0x10906000 ,//"j"
        0x0000C040,0x40405C48,0x50605048,0x44EE0000 ,//"k"
        0x00003010,0x10101011,0x10101010,0x10390000 ,//"l"
        0x00000000,0x0000ACD2,0x92929292,0x92D60000 ,//"m"
        0x00000000,0x000058E4,0x44444444,0x44EE0000 ,//"n"
        0x00000000,0x00003844,0x82828282,0x44380000 ,//"o"
        0x00000000,0x0000D864,0x42424264,0x5840E000 ,//"p"
        0x00000000,0x0000364C,0x8484844C,0x34040E00 ,//"q"
        0x00000000,0x00006C30,0x20202020,0x20700000 ,//"r"
        0x00000000,0x00007888,0x84601884,0x44780000 ,//"s"
        0x00000020,0x2020F820,0x20202020,0x24180000 ,//"t"
        0x00000000,0x0000C642,0x42424242,0x463A0000 ,//"u"
        0x00000000,0x0000EE44,0x44282828,0x10100000 ,//"v"
        0x00000000,0x0000EE44,0x44545428,0x28280000 ,//"w"
        0x00000000,0x0000EE44,0x28101028,0x44EE0000 ,//"x"
        0x00000000,0x0000EE44,0x44282810,0x10A0C000 ,//"y"
        0x00000000,0x00007E44,0x88102042,0x84FC0000 ,//"z"
        0x000C1010,0x10101060,0x10101010,0x10100C00 ,//"{"
        0x00101010,0x10101010,0x10101010,0x10101000 ,//"|"
        0x00C02020,0x20202018,0x20202020,0x2020C000 ,//"}"
        0x00000000,0x00000072,0x8C000000,0x00000000 //"~"
    ]
    export enum LCDcolor {
        //% blockId="RED" block="红色"
        RED = 0xf800,
        //% blockId="GREEN" block="绿色"
        GREEN = 0x07e0,
        //% blockId="BLUE" block="蓝色"
        BLUE = 0x001f,
        //% blockId="WHITE" block="白色"
        WHITE = 0xffff,
        //% blockId="BLACK" block="黑色"
        BLACK = 0x0000,
        //% blockId="YELLOW" block="黄色"
        YELLOW = 0xFFE0,
        //% blockId="GRAY0" block="浅灰"
        GRAY0 = 0xEF7D,  	                    //灰色0 3165 00110 001011 00101
        //% blockId="GRAY1" block="中灰"
        GRAY1 = 0x8410,      	                //灰色1      00000 000000 00000
        //% blockId="GRAY2" block="深灰"
        GRAY2=0x4208      	                    //灰色2  1111111111011111
    }
    //写指令
    function LCDWriteindex (value: number) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.spiWrite(value)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    //写8位数据
    function LCDWritedata (value: number) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.spiWrite(value)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    //写16位数据
    function LCDWritedata16 (value: number) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.spiWrite(value >> 8)
        pins.spiWrite(value)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    //：设置lcd显示区域，在此区域写点数据自动换行
    function Lcd_SetRegion (x_s: number, y_s: number, x_e: number, y_e: number) {
        LCDWriteindex(42)
        LCDWritedata(0)
        LCDWritedata(x_s)
        LCDWritedata(0)
        LCDWritedata(x_e)
        LCDWriteindex(43)
        LCDWritedata(0)
        LCDWritedata(y_s)
        LCDWritedata(0)
        LCDWritedata(y_e)
        LCDWriteindex(44)
    }
    //LCD写Reg
    function Lcd_WriteReg (index: number, data: number) {
        LCDWriteindex(index)
        LCDWritedata(data)
    }
    //设置lcd显示起始点
    function Lcd_SetXY (x: number, y: number) {
        Lcd_SetRegion(x + 2, y + 1, x + 2, y + 1)
    }
    //画一个点
    function Gui_DrawPoint (x: number, y: number, data: number) {
        Lcd_SetRegion(x + 2, y + 1, x + 3, y + 2)
        LCDWritedata16(data)
    }
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_LcdInit block="初始化显示屏"
    //% weight=100
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function LcdInit(): void {
        pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
        pins.spiFormat(8, 1)
        pins.spiPins(DigitalPin.P15, DigitalPin.P14, DigitalPin.P13)
        pins.spiFrequency(40000000)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)

        LCDReset()
        LCDWriteindex(17)
        basic.pause(120)
        LCDWriteindex(177)
        LCDWritedata(5)
        LCDWritedata(60)
        LCDWritedata(60)
        LCDWriteindex(178)
        LCDWritedata(5)
        LCDWritedata(60)
        LCDWritedata(60)
        LCDWriteindex(179)
        LCDWritedata(5)
        LCDWritedata(60)
        LCDWritedata(60)
        LCDWritedata(5)
        LCDWritedata(60)
        LCDWritedata(60)
        LCDWriteindex(180)
        LCDWritedata(3)
        LCDWriteindex(192)
        LCDWritedata(40)
        LCDWritedata(8)
        LCDWritedata(4)
        LCDWriteindex(193)
        LCDWritedata(192)
        LCDWriteindex(194)
        LCDWritedata(13)
        LCDWritedata(0)
        LCDWriteindex(195)
        LCDWritedata(141)
        LCDWritedata(42)
        LCDWriteindex(196)
        LCDWritedata(141)
        LCDWritedata(238)
        LCDWriteindex(197)
        LCDWritedata(26)
        LCDWriteindex(54)
        LCDWritedata(192)
        LCDWriteindex(224)
        LCDWritedata(4)
        LCDWritedata(34)
        LCDWritedata(7)
        LCDWritedata(10)
        LCDWritedata(46)
        LCDWritedata(48)
        LCDWritedata(37)
        LCDWritedata(42)
        LCDWritedata(40)
        LCDWritedata(38)
        LCDWritedata(46)
        LCDWritedata(58)
        LCDWritedata(0)
        LCDWritedata(1)
        LCDWritedata(3)
        LCDWritedata(19)
        LCDWriteindex(225)
        LCDWritedata(4)
        LCDWritedata(22)
        LCDWritedata(6)
        LCDWritedata(13)
        LCDWritedata(45)
        LCDWritedata(38)
        LCDWritedata(35)
        LCDWritedata(39)
        LCDWritedata(39)
        LCDWritedata(37)
        LCDWritedata(45)
        LCDWritedata(59)
        LCDWritedata(0)
        LCDWritedata(1)
        LCDWritedata(4)
        LCDWritedata(18)
        LCDWriteindex(58)
        LCDWritedata(5)
        LCDWriteindex(41)
    }
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_LCDReset block="复位显示屏"
    //% weight=99
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function LCDReset () {
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_Lcd_Clear block="清空屏幕并将底色设置为|%value"
    //% weight=98 
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Lcd_Clear (value:LCDcolor) {
        Lcd_SetRegion(2, 1, 129, 160)
        LCDWriteindex(44)
        for (let i = 0; i < 128; i++) {
            for (let i = 0; i < 160; i++) {
                LCDWritedata16(value)
            }
        }
    }
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_LCD_Gui_DrawFont_GBK16 block="在x=%x y=%y显示字符%text 字符颜色为%c1 底色为%c2"
    //% weight=97
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function LCD_Gui_DrawFont_GBK16(x:number,y:number,text:string,c1:LCDcolor,c2:LCDcolor) {
        let i, j, k, x0,num
        x0 = x
        
        for (let n = 0; n < text.length; n++){
            if (text.charCodeAt(n)<128) {
                k = text.charCodeAt(n)
                if (k == 13) {
                    x = x0
                    y += 16
                }
                else {
                    if (k > 32) k -= 32
                    else k = 0;
                    for (i = 0; i<16; i++){
                        num=asc16[k*4+i/4]
                        for (j = 0; j < 8; j++){
                            if (((num>>((3-(i%4))*8))&0x000000ff)&(0x80>>j)) {
                                Gui_DrawPoint(x + j, y + i, c1)
                            }
                            else {
                                if (c1 != c2) {
                                    Gui_DrawPoint(x + j, y + i, c2)
                                }
                            }
                            
                        }
                    }
                    x += 8
                }
            }
        }
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_LCD_Gui_DrawFont_number block="在x=%x y=%y显示数字%data 数字颜色为%c1 底色为%c2"
    //% weight=96
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function LCD_Gui_DrawFont_number(x:number,y:number,data:number,c1:LCDcolor,c2:LCDcolor) {
        // let i, j, k, x0,num
        // x0 = x
        // let text: string = null
        // text = data.toString()
        LCD_Gui_DrawFont_GBK16(x, y, data.toString(), c1, c2)
        /*
        for (let n = 0; n < text.length; n++){
            if (text.charCodeAt(n)<128) {
                k = text.charCodeAt(n)
                if (k == 13) {
                    x = x0
                    y += 16
                }
                else {
                    if (k > 32) k -= 32
                    else k = 0;
                    for (i = 0; i<16; i++){
                        num=asc16[k*4+i/4]
                        for (j = 0; j < 8; j++){
                            if (((num>>((3-(i%4))*8))&0x000000ff)&(0x80>>j)) {
                                Gui_DrawPoint(x + j, y + i, c1)
                            }
                            else {
                                if (c1 != c2) {
                                    Gui_DrawPoint(x + j, y + i, c2)
                                }
                            }
                            
                        }
                    }
                    x += 8
                }
            }
        }  */
    }

     /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_LCD_Gui_Circle block="画一个圆，圆心x=%X y=%Y 半径r=%r 颜色为%fc"
    //% weight=95
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function LCD_Gui_Circle(X:number,Y:number,r:number,fc:LCDcolor) {
        let a, b, c
        a = 0
        b = r
        c = 3 - 2 * r
        while (a < b) {
            Gui_DrawPoint(X+a,Y+b,fc);    
            Gui_DrawPoint(X-a,Y+b,fc);      
            Gui_DrawPoint(X+a,Y-b,fc);      
            Gui_DrawPoint(X-a,Y-b,fc);      
            Gui_DrawPoint(X+b,Y+a,fc);            
            Gui_DrawPoint(X-b,Y+a,fc);           
            Gui_DrawPoint(X+b,Y-a,fc);            
            Gui_DrawPoint(X-b,Y-a,fc);             

            if(c<0) c=c+4*a+6; 
            else 
            { 
                c=c+4*(a-b)+10; 
                b-=1; 
            } 
            a+=1;
        }
        if (a==b)  { 
            Gui_DrawPoint(X+a,Y+b,fc); 
            Gui_DrawPoint(X+a,Y+b,fc); 
            Gui_DrawPoint(X+a,Y-b,fc); 
            Gui_DrawPoint(X-a,Y-b,fc); 
            Gui_DrawPoint(X+b,Y+a,fc); 
            Gui_DrawPoint(X-b,Y+a,fc); 
            Gui_DrawPoint(X+b,Y-a,fc); 
            Gui_DrawPoint(X-b,Y-a,fc); 
        }
    }
    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_LCD_Gui_DrawLine block="画一条直线，起点x0=%x0 y0=%y0 终点x1=%x1 y1=%y1 颜色为%Color"
    //% weight=94
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function LCD_Gui_DrawLine(x0:number,y0:number,x1:number,y1:number, Color:LCDcolor) {
        let dx,             // difference in x's
            dy,             // difference in y's
            dx2,            // dx,dy * 2
            dy2, 
            x_inc,          // amount in pixel space to move during drawing
            y_inc,          // amount in pixel space to move during drawing
            error,          // the discriminant i.e. error i.e. decision variable
            index;          // used for looping	
            Lcd_SetXY(x0,y0);
            dx = x1-x0;//计算x距离
            dy = y1-y0;//计算y距离
        
            if (dx>=0)
            {
                x_inc = 1;
            }
            else
            {
                x_inc = -1;
                dx    = -dx;  
            } 
            
            if (dy>=0)
            {
                y_inc = 1;
            } 
            else
            {
                y_inc = -1;
                dy    = -dy; 
            } 
        
            dx2 = dx << 1;
            dy2 = dy << 1;
        
            if (dx > dy)//x距离大于y距离，那么每个x轴上只有一个点，每个y轴上有若干个点
            {//且线的点数等于x距离，以x轴递增画点
                // initialize error term
                error = dy2 - dx; 
        
                // draw the line
                for (index=0; index <= dx; index++)//要画的点数不会超过x距离
                {
                    //画点
                    Gui_DrawPoint(x0,y0,Color);
                    
                    // test if error has overflowed
                    if (error >= 0) //是否需要增加y坐标值
                    {
                        error-=dx2;
        
                        // move to next line
                        y0+=y_inc;//增加y坐标值
                    } // end if error overflowed
        
                    // adjust the error term
                    error+=dy2;
        
                    // move to the next pixel
                    x0+=x_inc;//x坐标值每次画点后都递增1
                } // end for
            } // end if |slope| <= 1
            else//y轴大于x轴，则每个y轴上只有一个点，x轴若干个点
            {//以y轴为递增画点
                // initialize error term
                error = dx2 - dy; 
        
                // draw the line
                for (index=0; index <= dy; index++)
                {
                    // set the pixel
                    Gui_DrawPoint(x0,y0,Color);
        
                    // test if error overflowed
                    if (error >= 0)
                    {
                        error-=dy2;
        
                        // move to next line
                        x0+=x_inc;
                    } // end if error overflowed
        
                    // adjust the error term
                    error+=dx2;
        
                    // move to the next pixel
                    y0+=y_inc;
                } // end for
            } // end else |slope| > 1
    }

    /**
     * 
     * @param index
    */
    //% blockId=HuLuMaoGame_LCD_Gui_rectangle block="画一个矩形，起点x=%x y=%y 宽=%w 高=%h 颜色为%bc"
    //% weight=93
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function LCD_Gui_rectangle(x: number, y: number, w: number, h: number, bc: LCDcolor) {
        LCD_Gui_DrawLine(x,y,x+w,y,bc);
        LCD_Gui_DrawLine(x+w-1,y+1,x+w-1,y+1+h,bc);
        LCD_Gui_DrawLine(x,y+h,x+w,y+h,bc);
        LCD_Gui_DrawLine(x,y,x,y+h,bc);
        LCD_Gui_DrawLine(x+1,y+1,x+1+w-2,y+1+h-2,bc);
    }

}

