import java.util.Scanner;

public class RomanToInteger {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        
        System.out.print("Enter a Roman numeral: ");
        String roman = sc.nextLine().toUpperCase();
        
        
        int result = romanToInt(roman);
        
        
        if (result != -1) {
            System.out.println("The integer value of Roman numeral " + roman + " is: " + result);
        } else {
            System.out.println("Invalid Roman numeral entered!");
        }
        
        sc.close();
    }

    public static int romanToInt(String s) {
        if (!isValidRoman(s)) {
            return -1;  
        }

        int total = 0;
        for (int i = 0; i < s.length(); i++) {
            int value = getValue(s.charAt(i));
            
            
            if (i < s.length() - 1 && value < getValue(s.charAt(i + 1))) {
                total -= value;
            } else {
                total += value;
            }
        }
        return total;
    }

  
    public static int getValue(char romanChar) {
        switch (romanChar) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return -1;
        }
    }

    
    public static boolean isValidRoman(String s) {
        String validRomanPattern = "^(?i)(M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))$";
        return s.matches(validRomanPattern);
    }
}
