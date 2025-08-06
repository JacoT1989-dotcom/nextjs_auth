// lib/roleUtils.ts

export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  SUPERVISOR = "SUPERVISOR",
  MODERATOR = "MODERATOR",
  EDITOR = "EDITOR",
  USER = "USER",
  GUEST = "GUEST",
  VIEWER = "VIEWER",
}

// Define role hierarchy (higher number = more permissions)
export const roleHierarchy: Record<UserRole, number> = {
  [UserRole.GUEST]: 1,
  [UserRole.VIEWER]: 2,
  [UserRole.USER]: 3,
  [UserRole.EDITOR]: 4,
  [UserRole.MODERATOR]: 5,
  [UserRole.SUPERVISOR]: 6,
  [UserRole.MANAGER]: 7,
  [UserRole.ADMIN]: 8,
  [UserRole.SUPER_ADMIN]: 9,
};

// Role-based dashboard routes
export const roleRoutes: Record<UserRole, string> = {
  [UserRole.SUPER_ADMIN]: "/dashboard/super-admin",
  [UserRole.ADMIN]: "/dashboard/admin",
  [UserRole.MANAGER]: "/dashboard/manager",
  [UserRole.SUPERVISOR]: "/dashboard/supervisor",
  [UserRole.MODERATOR]: "/dashboard/moderator",
  [UserRole.EDITOR]: "/dashboard/editor",
  [UserRole.USER]: "/dashboard/user",
  [UserRole.GUEST]: "/dashboard/guest",
  [UserRole.VIEWER]: "/dashboard/viewer",
};

// Role descriptions for better UX
export const roleDescriptions: Record<UserRole, string> = {
  [UserRole.SUPER_ADMIN]: "Full system access and user management",
  [UserRole.ADMIN]: "Administrative privileges and user management",
  [UserRole.MANAGER]: "Team management and reporting access",
  [UserRole.SUPERVISOR]: "Team oversight and limited admin functions",
  [UserRole.MODERATOR]: "Content moderation and user support",
  [UserRole.EDITOR]: "Content creation and editing permissions",
  [UserRole.USER]: "Standard user access and features",
  [UserRole.GUEST]: "Limited access to basic features",
  [UserRole.VIEWER]: "Read-only access to content",
};

// Check if user has required permission level
export function hasPermission(
  userRole: UserRole,
  requiredRole: UserRole
): boolean {
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
}

// Get redirect path based on user role
export function getRoleRedirectPath(role: UserRole): string {
  return roleRoutes[role] || roleRoutes[UserRole.USER];
}

// Get all roles that have at least the specified permission level
export function getRolesWithMinimumPermission(minRole: UserRole): UserRole[] {
  const minLevel = roleHierarchy[minRole];
  return Object.entries(roleHierarchy)
    .filter(([, level]) => level >= minLevel)
    .map(([role]) => role as UserRole);
}
