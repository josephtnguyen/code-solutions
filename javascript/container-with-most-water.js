var maxArea = function(height) {
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;
    while (i != j) {
        const rectHeight = Math.min(height[i], height[j]);
        const rectWidth = j - i;
        const area = rectHeight * rectWidth;
        if (area > maxArea) {
            maxArea = area;
        }
        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
};
