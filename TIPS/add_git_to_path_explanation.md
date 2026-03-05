CLI (powershell) Commands

# Adding Git to the PATH using PowerShell

PowerShell Code
```javascript

    $oldPath = [Environment]::GetEnvironmentVariable("Path","User")
    [Environment]::SetEnvironmentVariable(
     "Path",
     $oldPath + ";C:\Users\6661552\AppData\Local\Programs\Git\cmd",
     "User"
    )
```

## Explanation

Line 1

    $oldPath = [Environment]::GetEnvironmentVariable("Path","User")

This line retrieves the current User PATH environment variable and
stores it in the variable $oldPath.

-   Environment is a .NET class that allows PowerShell to interact with
    system environment variables.
-   GetEnvironmentVariable() reads the value of an environment variable.
-   "Path" specifies the variable we want to read.
-   "User" means we are reading the PATH variable for the current user
    account, not the system-wide PATH.

After this line runs, $oldPath contains all the directories currently in
the user’s PATH.

------------------------------------------------------------------------

Lines 2–6

    [Environment]::SetEnvironmentVariable(
     "Path",
     $oldPath + ";C:\Users\6661552\AppData\Local\Programs\Git\cmd",
     "User"
    )

This block updates the PATH environment variable by adding the Git
directory to it.

Breakdown:

-   SetEnvironmentVariable() writes a new value to an environment
    variable.
-   "Path" indicates we are modifying the PATH variable.
-   $oldPath + ";C:\Users\6661552\AppData\Local\Programs\Git\cmd"
    appends the Git directory to the existing PATH.
-   The semicolon (;) separates directories in the PATH list.
-   "User" ensures the change applies only to the current user account.

------------------------------------------------------------------------

What this accomplishes

After running this code:

-   The directory containing git.exe is added to your PATH.
-   Windows will be able to find the git command from any terminal
    (PowerShell, Command Prompt, VS Code terminal).
-   Commands like the following will work:

    git --version
    git clone <repository>
    git pull
    git push

------------------------------------------------------------------------

Important Note

After updating the PATH, you must restart your terminal (or VS Code
terminal) so the new PATH value is loaded.

Then verify Git works by running:

    git --version

If the PATH update succeeded, PowerShell should display the installed
Git version.


# List contents of a specific folder

```powershell
Get-ChildItem "C:\Users\snhrg\WGU"
```

```powershell
ls C:\Users\snhrg\WGU
```

# Check if a folder exists

```powershell
Test-Path "C:\Program Files\nodejs"
```