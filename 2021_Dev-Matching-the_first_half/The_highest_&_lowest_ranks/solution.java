import java.util.*;

class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = new int[2];
        int[] rank = {6,6,5,4,3,2,1};
        int max = 0;
        int min = 0;
        
        Arrays.sort(lottos);
        Arrays.sort(win_nums);
        
        for (int i=0; i<lottos.length; i++) {
            if (lottos[i] == 0) max++;
            if (Arrays.binarySearch(win_nums, lottos[i]) > -1) {
                max++;
                min++;
            }
        }
                
        answer[0] = rank[max];
        answer[1] = rank[min];
        
        return answer;
    }
}