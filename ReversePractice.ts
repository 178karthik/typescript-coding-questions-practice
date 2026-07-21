class ReversePractice {
    reversepractice(str: string): string {
        let words = str.split(" ");
        let result: string = "";
        for (let word of words) {
            result = result.concat(this.reverse(word)).concat(" ");
        }
        return result;
    }

     isCharacter(ch: string): boolean {
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            return true;
        }
        return false;
    }

        reverse(word: string): string {
        let left = 0;
        let right = word.length - 1;
        let arr = word.split('');
        while (left < right) {
            if (!this.isCharacter(arr[left])) {
                left++;
            } else if (!this.isCharacter(arr[right])) {
                right--;
            } else {
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
        return arr.join('');
    }
}

const reversePractice = new ReversePractice();
console.log(reversePractice.reversepractice("I love abc$%d my country"));
