export class Utils {

    public static utf8_to_b64(str:string):string {
        return window.btoa(str);
      }
      
    public static b64_to_utf8(str:string):string {
        return window.atob(str);
      }

}
