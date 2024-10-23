import java.util.Scanner;

public class PangramChecker {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();
        
        if (isPangram(sentence)) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is NOT a pangram.");
        }

        sc.close(); 
    }

  
    public static boolean isPangram(String sentence) {
        boolean[] alphabet = new boolean[26]; 
        int index = 0;

        
        sentence = sentence.toLowerCase();

        
        for (int i = 0; i < sentence.length(); i++) {
            char currentChar = sentence.charAt(i);

            
            if (currentChar >= 'a' && currentChar <= 'z') {
                index = currentChar - 'a'; 
                alphabet[index] = true;    
            }
        }

        
        for (boolean letterFound : alphabet) {
            if (!letterFound) {
                return false; 
            }
        }
        
        return true; 
    }
}
