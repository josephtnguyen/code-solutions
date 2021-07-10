class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        longest = 0
        currentSubStr = ''
        for letter in s:
          while(currentSubStr.find(letter) is not -1):
            currentSubStr = currentSubStr[1:]
          currentSubStr += letter
          if (longest < len(currentSubStr)):
            longest = len(currentSubStr)
        return longest
