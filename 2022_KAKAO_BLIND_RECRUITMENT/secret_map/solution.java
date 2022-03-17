import java.util.*;

class Solution {
    public String leftPad(String str, int padNum, String pattern) {
        int strLength = str.length();
        
        if (strLength < padNum) {
            for (int i=0; i<padNum - strLength; i++) {
                str = pattern + str;
            }
        }
        
        return str;     
    }
    
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];
        
        for (int i=0; i<n; i++) {
            String map = "";
            char[] ch1 = leftPad(Integer.toBinaryString((int)arr1[i]), n, "0").toCharArray();
            char[] ch2 = leftPad(Integer.toBinaryString((int)arr2[i]), n, "0").toCharArray();
            
            for (int j=0;j<ch1.length;j++) {
                if ('1' == ch1[j] || '1' == ch2[j]) {
                    map = map + "#";
                } else {
                    map = map + " ";
                }
            }
            
            answer[i] = map;
        }
        
        return answer;
    }
}