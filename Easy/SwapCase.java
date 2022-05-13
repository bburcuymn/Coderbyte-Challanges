/* Have the function SwapCase(str) take the str parameter and
swap the case of each character.
For example: Input: "Hello-LOL" then output: hELLO-lol  */

public static String SwapCase(String str) {

    char[] chars = str.toCharArray() ; 

    for(int i=0; i< chars.length; i++){
        char c=chars[i];

        if(Character.isUpperCase(c)){
            chars[i] = Character.toLowerCase(c);
        }
        else if(Character.isLowerCase(c)){
            chars[i] = Character.toUpperCase8(c);
        }

    }
    return new String(chars);

}
