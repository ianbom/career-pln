<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class FilesTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_from_files(): void
    {
        $this->get('/files')->assertRedirect('/login');
    }

    public function test_authenticated_users_can_visit_files(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get('/files')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('files'));
    }
}
