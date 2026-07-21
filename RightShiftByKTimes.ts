class RightShiftByKTimes{

    rightshiftByKTimes(arr:number[],k:number):number[]
    {
        this.reverse(arr,0,arr.length-1);
        this.reverse(arr,0,k-1);
        this.reverse(arr,k,arr.length-1)

        return arr;
    }
    reverse(arr:number[],left:number,right:number)
    {
       while(left<right)
       {
        let temp = arr[left];
        arr[left] =arr[right];
        arr[right] =temp;
        left++;
        right--;
       }
    }

}
let rightshiftByKTimes = new RightShiftByKTimes();
console.log(rightshiftByKTimes.rightshiftByKTimes([1,2,3,4,5],1))