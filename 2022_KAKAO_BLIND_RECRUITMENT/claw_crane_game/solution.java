import java.util.*;

 public class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        List<Integer> box = new ArrayList<>();
        
        for (int m : moves) {
            for (int i=0; i<board.length; i++) {
                if (board[i][m-1] > 0) {
                    if (box.size() > 0 && box.get(box.size()-1) == board[i][m-1]) {
                        box.remove(box.size()-1);
                        answer += 2;
                    } else {
                        box.add(board[i][m-1]);
                    }
                    
                    board[i][m-1] = 0;
                    break;
                }
            }
        }
        
        return answer;
    }
}