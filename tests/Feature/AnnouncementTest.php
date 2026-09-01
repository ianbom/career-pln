<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class AnnouncementTest extends TestCase
{
    use RefreshDatabase;

    public function test_authenticated_users_can_visit_the_announcement(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get('/announcement')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('announcement'));
    }
}
