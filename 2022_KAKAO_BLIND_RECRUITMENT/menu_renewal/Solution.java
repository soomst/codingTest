import java.util.*;

class Solution {
    List<Map<String, Integer>> FoodMaps = new ArrayList<>(); //order, 해당 order의 주문 수
    int[] MaxCnt = new int[11];

    void comb(char[] str, int pos, StringBuilder candi) {
        if (pos >= str.length) {
            int len = candi.length();
            if (len >= 2) {
                int cnt = FoodMaps.get(len).getOrDefault(candi.toString(), 0) + 1;
                FoodMaps.get(len).put(candi.toString(), cnt);
                MaxCnt[len] = Math.max(MaxCnt[len], cnt);
            }
            return;
        }   

        comb(str, pos+1, candi.append(str[pos]));
        candi.setLength(candi.length()-1); //마지막에 append되었던 문자를 제거
        comb(str, pos+1, candi);
    }

    public String[] solution(String[] orders, int[] course) {

        for (int i=0; i<11; ++i) { //orders 배열의 각 원소는 크기가 2 이상 10 이하인 문자열입니다. (제한조건)
            FoodMaps.add(new HashMap<String, Integer>()); //메뉴 구성별로 해시멥 사용 가능.
        }

        for (String str : orders) {
            //조합은 순열과 다르게 순서가 중요하지 않기 때문에, 알파벳 순으로 고정하여 조합을 할 것이므로 정렬을 선행해준다.
            char[] arr = str.toCharArray();
            Arrays.sort(arr);

            comb(arr, 0, new StringBuilder());
        }

        List<String> list = new ArrayList<>();

        for (int len : course) {
            for (Map.Entry <String, Integer> entry : FoodMaps.get(len).entrySet()) {
                if (entry.getValue() >= 2 && entry.getValue() == MaxCnt[len]) {
                    list.add(entry.getKey());
                }
            }
        }

        Collections.sort(list); //재정렬

        String[] answer = new String[list.size()];

        for (int i=0; i<list.size(); ++i) {
            answer[i]= list.get(i)
        }

        return answer;
    }
}