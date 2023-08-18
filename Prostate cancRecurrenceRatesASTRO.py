'''
This code is designed to determine whether a given list of Prostate Specific Antigen (PSA) values adheres to the ASTRO
(American Society for Radiation Oncology) criteria for biochemical recurrence in prostate cancer patients who have undergone radiation therapy.
The criteria state that there should be three consecutive increases in PSA values after reaching the lowest value (nadir) following treatment. 
The code iterates through the PSA values, starting from the nadir point, and checks if there are at least three consecutive increases in the values. 
If such a sequence is found, the function returns `True`, indicating that the recurrence criteria are met. If not, the function returns `False`. 
This code aims to automate the process of evaluating whether a patient's PSA values show signs of recurrence of prostate cancer following treatment.
'''
def recurrence(values):
    nadir = min(values)
    i = values.index(nadir)
    last_index = len(values) - 1
    
    count = 0
    for x in range(i, last_index):
        if values[x] < values[x+1]:
            count += 1
        else:
            count = 0
        
        if count >= 3:
            return True
    
    return False
